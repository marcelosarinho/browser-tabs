import type { Tab } from '../App';
import './BrowserURL.css';

interface BrowserURLProps {
  selectedTab: Tab,
  tabs: Tab[],
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>
}

export default function BrowserURL(props: BrowserURLProps) {
  const { selectedTab, tabs, setTabs } = props;

  return (
    <div className="url">
      <input type="text" value={selectedTab.url} />
    </div>
  )
}