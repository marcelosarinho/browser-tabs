import TabIcon from './TabIcon';
import './Tabs.css';

export default function Tabs() {
  return (
    <section className="tabs">
      <div className="tabs__tab">
        <TabIcon />
        <span>Título</span>
        <i className="ph ph-x close"></i>
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
      <i className="ph ph-plus"></i>
    </section>
  )
}