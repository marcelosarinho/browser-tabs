import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'

export type Tab = {
  index: number;
  name: string;
  url: string;
}

function App() {
  const [tabs, setTabs] = useState<Tab[]>([
    { index: 0, name: 'Nova aba 1', url: 'localhost:3000' },
  ]);
  const [selectedTab, setSelectedTab] = useState(0);

  function removeTab(index: number) {
    setTabs(tabs.filter((tab) => tab.index !== index));
  }

  function addTab() {
    setTabs(prev => {
      const nextIndex = prev.length > 0 ? prev[prev.length - 1].index + 1 : 0;
      setSelectedTab(nextIndex);
      return [...prev, {
        index: nextIndex,
        name: `Nova aba ${nextIndex + 1}`,
        url: 'localhost:3000',
      }];
    });
  }

  return (
    <main>
      <Header />
      <Tabs remove={removeTab} add={addTab} tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </main>
  )
}

export default App
