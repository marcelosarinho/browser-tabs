import { useRef, useState } from 'react'
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
  const index = useRef(0);
  const [tabs, setTabs] = useState<Tab[]>([
    { index: index.current, name: 'Nova aba 0', url: '' },
  ]);
  const [selectedTab, setSelectedTab] = useState<Tab>(
    { index: index.current, name: 'Nova aba 0', url: '' },
  );
  const [previousTab, setPreviousTab] = useState<Tab>(
    { index: index.current, name: 'Nova aba 0', url: '' },
  );

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
    index.current += 1;

    const newTab: Tab = {
      index: index.current,
      name: `Nova aba ${index.current}`,
      url: '',
    }

    setPreviousTab(selectedTab);
    setSelectedTab(newTab);
    setTabs([...tabs, newTab]);
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
