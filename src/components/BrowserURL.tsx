import type { Tab } from '../App';
import './BrowserURL.css';

interface BrowserURLProps {
  selectedTab: Tab,
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>,
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
  setTemporaryUrl: React.Dispatch<React.SetStateAction<string>>,
  temporaryUrl: string
}

export default function BrowserURL(props: BrowserURLProps) {
  const { selectedTab, setSelectedTab, setTabs, setTemporaryUrl, temporaryUrl } = props;

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