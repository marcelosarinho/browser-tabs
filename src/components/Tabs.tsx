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
  setPreviousTab: React.Dispatch<React.SetStateAction<Tab>>,
}

export default function Tabs(props: TabsProps) {
  const { tabs, setTabs, add, remove, selectedTab, setSelectedTab, setPreviousTab } = props;

  function selectTab(tab: Tab) {
    setPreviousTab(selectedTab);
    setSelectedTab(tab);
  }

  return (
    <>
      <section className="tabs__header">
        <div className="tabs">
          {tabs.map((tab: Tab) => (
            <div className="tab" key={tab.index}>
              <div className="tab__tooltip">
                <h6>{tab.name}</h6>
                <p>{tab.url ? tab.url : 'Sem URL'}</p>
              </div>
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