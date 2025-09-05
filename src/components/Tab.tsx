import type { ComponentProps } from "react";
import type { Tab } from "../App";
import TabIcon from "./TabIcon";
import TabTooltip from "./TabTooltip";

interface TabProps extends ComponentProps<'div'> {
  tab: Tab,
  selectedTab: Tab,
  remove: (index: number) => void,
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>,
  setPreviousTab: React.Dispatch<React.SetStateAction<Tab>>,
}

export default function Tab(props: TabProps) {
  const { tab, selectedTab, remove, setSelectedTab, setPreviousTab } = props;
  
  function selectTab(tab: Tab) {
    setPreviousTab(selectedTab);
    setSelectedTab(tab);
  }

  return (
    <div className="tab">
      <TabTooltip tab={tab} />
      <div
        onClick={() => selectTab(tab)}
        className={`tabs__tab ${selectedTab.index === tab.index ? 'tabs__tab--active' : ''}`}>
          <TabIcon />
          <span>{tab.name}</span>
          <button onClick={() => remove(tab.index)} className="close">
            <i className="ph ph-x"></i>
          </button>
      </div>
    </div>
  )
}