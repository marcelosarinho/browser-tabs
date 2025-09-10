import { useRef, useState } from "react";
import type { Tab } from "../App";
import { TabsContext } from "./TabsContext";

export default function TabsProvider({ children }: { children: React.ReactNode }) {
  const index = useRef(1);

  const [tabs, setTabs] = useState<Tab[]>([
    { index: index.current, name: 'Nova aba 1', url: '' },
  ]);
  const [selectedTab, setSelectedTab] = useState<Tab>(
    { index: index.current, name: 'Nova aba 1', url: '' },
  );
  const [previousTab, setPreviousTab] = useState<Tab>(
    { index: index.current, name: 'Nova aba 1', url: '' },
  );
  const [temporaryUrl, setTemporaryUrl] = useState('');

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
    <TabsContext.Provider value={{
      tabs, setTabs,
      selectedTab, setSelectedTab,
      previousTab, setPreviousTab,
      temporaryUrl, setTemporaryUrl,
      addTab, removeTab
    }}>
      {children}
    </TabsContext.Provider>
  )
}