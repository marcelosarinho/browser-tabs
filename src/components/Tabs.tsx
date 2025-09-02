import type { Tab } from '../App';
import BrowserURL from './BrowserURL';
import Content from './Content';
import TabIcon from './TabIcon';
import './Tabs.css';

interface TabsProps {
  tabs: Tab[],
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
  add: VoidFunction,
  remove: (index: number) => void,
  selectedTab: Tab,
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>,
}

export default function Tabs(props: TabsProps) {
  const { tabs, setTabs, add, remove, selectedTab, setSelectedTab } = props;

  return (
    <>
      <section className="tabs__header">
        <div className="tabs">
          {tabs.map((tab: Tab) => (
            <div
              onClick={() => setSelectedTab(tab)}
              key={tab.index}
              className={`tabs__tab ${selectedTab.index === tab.index ? 'tabs__tab--active' : ''}`}>
              <TabIcon />
              <span>{tab.name}</span>
              <button onClick={() => remove(tab.index)} className="close">
                <i className="ph ph-x"></i>
              </button>
            </div>
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