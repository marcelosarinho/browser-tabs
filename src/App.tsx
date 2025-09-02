import { useState } from 'react'
import './App.css'
import BrowserURL from './components/BrowserURL'
import Content from './components/Content'
import Header from './components/Header'
import Tabs from './components/Tabs'

export type Tab = {
  index: number;
  name: string;
  url: string;
}

function App() {
  const [tabs, setTabs] = useState<Tab[]>([
    { index: 0, name: 'Nova aba', url: 'localhost:3000' },
  ]);
  const [selectedTab, setSelectedTab] = useState(0);

  function removeTab(index: number) {
    setTabs(tabs.filter((tab) => tab.index !== index));
  }

  function addTab() {
    const newTab: Tab = {
      index: tabs.length,
      name: 'Nova aba',
      url: 'localhost:3000'
    };

    setTabs([...tabs, newTab]);
    setSelectedTab(newTab.index);
  }

  return (
    <main>
      <Header />
      <Tabs remove={removeTab} add={addTab} tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {tabs.length > 0 && (
        <>
          <BrowserURL />
          <Content />
        </>
      )}
    </main>
  )
}

export default App
