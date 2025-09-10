import type { ComponentProps } from "react";
import type { Tab } from "../App";
import TabIcon from "./TabIcon";
import TabTooltip from "./TabTooltip";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTabs } from "../context/TabsContext";

interface TabProps extends ComponentProps<'div'> {
  tab: Tab,
  isOverlay?: boolean,
  width?: number | null,
}

export default function Tab(props: TabProps) {
  const { tab, width, isOverlay } = props;
  const { selectedTab, removeTab, setSelectedTab, setPreviousTab, setTemporaryUrl } = useTabs();

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: tab.index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? "none" : transition,
    opacity: isDragging && !isOverlay ? 0.3 : 1,
  }
  
  function selectTab(tab: Tab) {
    setTemporaryUrl(tab.url);
    setPreviousTab(selectedTab);
    setSelectedTab(tab);
  }

  return (
    <div data-tab-id={tab.index} ref={setNodeRef} {...attributes} {...listeners} style={style} className="tab">
      <TabTooltip tab={tab} />
      <div
        style={{ minWidth: width ?? 0 }}
        onClick={() => selectTab(tab)}
        className={`tabs__tab ${selectedTab.index === tab.index ? 'tabs__tab--active' : ''}`}>
          <TabIcon />
          <span>{tab.name}</span>
          <button onClick={() => removeTab(tab.index)} className="close">
            <i className="ph ph-x"></i>
          </button>
      </div>
    </div>
  )
}