import type { Tab } from "../App";
import './TabTooltip.css';

export default function TabTooltip(props: { tab: Tab }) {
  const { tab } = props;

  return (
    <div className="tab__tooltip">
      <h6>{tab.name}</h6>
      <p>{tab.url ? tab.url : 'Sem URL'}</p>
    </div>
  )
}