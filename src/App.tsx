import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'

export type Tab = {
  index: number;
  name: string;
  url: string;
  content?: string;
}

function App() {
  const [tabs, setTabs] = useState<Tab[]>([
    { index: 0, name: 'Nova aba 1', url: '' },
  ]);
  const [selectedTab, setSelectedTab] = useState<Tab>(
    { index: 0, name: 'Nova aba 1', url: '' },
  );
  const [previousTab, setPreviousTab] = useState<Tab>(
    { index: 0, name: 'Nova aba 1', url: '' },
  )

  function removeTab(index: number) {
    if (tabs.length <= 1) return;

    const isSelected = selectedTab.index === index;

    setTabs(prev => {
      const updatedTabs = prev.filter((tab) => tab.index !== index);

      if (isSelected) {
        const nextSelected = updatedTabs.some((tab) => tab.index === previousTab.index) ? previousTab : updatedTabs[updatedTabs.length - 1] || null

        setSelectedTab(nextSelected);
      } else {
        setSelectedTab(selectedTab);
      }

      return updatedTabs;
    });
  }

  function addTab() {
    setTabs(prev => {
      const nextIndex = prev.length > 0 ? prev[prev.length - 1].index + 1 : 0;

      const newTab: Tab = {
        index: nextIndex,
        name: `Nova aba ${nextIndex + 1}`,
        url: '',
      };

      setPreviousTab(selectedTab);
      setSelectedTab(newTab);

      return [...prev, newTab];
    });
  }

  return (
    <main>
      <Header />
      <Tabs
        remove={removeTab}
        add={addTab}
        tabs={tabs}
        setTabs={setTabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setPreviousTab={setPreviousTab}
      />
    </main>
  )
}

export default App
