import type { Tab } from '../App';
import TabIcon from './TabIcon';
import './Tabs.css';

export default function Tabs(props: { tabs: Tab[], add: VoidFunction, remove: (index: number) => void }) {
  const { tabs, add, remove } = props;

  return (
    <section className="tabs__header">
      <div className="tabs">
        {tabs.map((tab: Tab) => (
          <div key={tab.index} className="tabs__tab">
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
  )
}