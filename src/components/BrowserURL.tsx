import type { Tab } from '../App';
import { useTabs } from '../context/TabsContext';
import './BrowserURL.css';

export default function BrowserURL() {
  const { selectedTab, setSelectedTab, setTabs, setTemporaryUrl, temporaryUrl } = useTabs();

  function updateTabs(tabs: Tab[], index: number, fieldToUpdate: Partial<Tab>) {
    return tabs.map((tab) => tab.index === index ? { ...tab, ...fieldToUpdate } : tab)
  }

  function normalizeUrl() {
    const regex = /^https?:\/\//i;

    if (!regex.test(temporaryUrl)) {
      return 'https://' + temporaryUrl;
    }

    return temporaryUrl;
  }

  function changeContent(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const url = normalizeUrl();

      setSelectedTab({ ...selectedTab, url });
      setTabs(prev => updateTabs(prev, selectedTab.index, { url }));
    }
  }

  return (
    <div className="url">
      <input
        placeholder='Digite a URL'
        onKeyDown={(e) => changeContent(e)}
        onChange={(e) => setTemporaryUrl(e.target.value)}
        type="text"
        value={temporaryUrl}
      />
    </div>
  )
}