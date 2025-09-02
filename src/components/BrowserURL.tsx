import type { ChangeEvent } from 'react';
import type { Tab } from '../App';
import './BrowserURL.css';

interface BrowserURLProps {
  selectedTab: Tab,
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>,
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
}

export default function BrowserURL(props: BrowserURLProps) {
  const { selectedTab, setSelectedTab, setTabs } = props;

  function updateTabs(tabs: Tab[], index: number, fieldToUpdate: Partial<Tab>) {
    return tabs.map((tab) => tab.index === index ? { ...tab, ...fieldToUpdate } : tab)
  }

  function changeURL(e: ChangeEvent<HTMLInputElement>) {
    const newUrl = e.target.value;

    setSelectedTab({...selectedTab, url: newUrl});

    setTabs(prev => updateTabs(prev, selectedTab.index, { url: newUrl }));
  }

  return (
    <div className="url">
      <input
        onChange={(e) => changeURL(e)}
        type="text"
        value={selectedTab.url}
      />
    </div>
  )
}