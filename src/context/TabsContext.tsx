import { createContext, useContext } from "react";
import type { Tab } from "../App";

export interface TabsContextType {
  tabs: Tab[],
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
  selectedTab: Tab,
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>,
  previousTab: Tab,
  setPreviousTab: React.Dispatch<React.SetStateAction<Tab>>,
  temporaryUrl: string,
  setTemporaryUrl: React.Dispatch<React.SetStateAction<string>>,
  addTab: VoidFunction,
  removeTab: (index: number) => void,
}

export const TabsContext = createContext<TabsContextType | null>(null);

export function useTabs() {
  const ctx = useContext(TabsContext);

  if (!ctx) throw new Error('useTabs deve ser utilizado dentro de <TabsProvider>!');

  return ctx;
}