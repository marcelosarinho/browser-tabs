import type { Tab as TabType } from '../App';
import BrowserURL from './BrowserURL';
import Content from './Content';
import './Tabs.css';
import Tab from './Tab';

interface TabsProps {
  tabs: TabType[],
  setTabs: React.Dispatch<React.SetStateAction<TabType[]>>
  add: VoidFunction,
  remove: (index: number) => void,
  selectedTab: TabType,
  setSelectedTab: React.Dispatch<React.SetStateAction<TabType>>,
  setPreviousTab: React.Dispatch<React.SetStateAction<TabType>>,
}

export default function Tabs(props: TabsProps) {
  const { tabs, setTabs, add, remove, selectedTab, setSelectedTab, setPreviousTab } = props;

  return (
    <>
      <section className="tabs__header">
        <div className="tabs">
          {tabs.map((tab: TabType) => (
            <Tab tab={tab} selectedTab={selectedTab} remove={remove} setSelectedTab={setSelectedTab} setPreviousTab={setPreviousTab} />
          ))}
        </div>
        <button onClick={add} className="tabs__add_button">
          <i className="ph ph-plus"></i>
        </button>
      </section>
      <BrowserURL selectedTab={selectedTab} setSelectedTab={setSelectedTab} setTabs={setTabs} />
      <Content selectedTabName={selectedTab.name} />
    </>
  )
}