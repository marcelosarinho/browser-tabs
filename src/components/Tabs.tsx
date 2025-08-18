import type { Tab } from '../App';
import TabIcon from './TabIcon';
import './Tabs.css';

export default function Tabs(props: { tabs: Tab[], onClick: VoidFunction }) {
  const { tabs } = props;

  return (
    <section className="tabs__header">
      <div className="tabs">
        {tabs.map((tab: Tab) => (
          <div key={tab.index} className="tabs__tab">
            <span>{tab.name}</span>
            <i className="ph ph-x close"></i>
          </div>
        ))}
        <div className="tabs__tab">
          <TabIcon />
          <span>Título</span>
          <button className="close">
            <i className="ph ph-x close"></i>
          </button>
        </div>
        <div className="tabs__tab">
          <TabIcon />
          <span>Título</span>
          <i className="ph ph-x close"></i>
        </div>
        <div className="tabs__tab tabs__tab--active">
          <TabIcon />
          <span>Título</span>
          <i className="ph ph-x close"></i>
        </div>
        <div className="tabs__tab">
          <TabIcon />
          <span>Título</span>
          <i className="ph ph-x close"></i>
        </div>
      </div>
      <button className="tabs__add_button">
        <i className="ph ph-plus"></i>
      </button>
    </section>
  )
}