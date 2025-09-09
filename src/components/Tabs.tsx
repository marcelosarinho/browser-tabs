import type { Tab as TabType } from '../App';
import BrowserURL from './BrowserURL';
import Content from './Content';
import './Tabs.css';
import Tab from './Tab';
import { useState } from 'react';
import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors, type DragEndEvent, type DragStartEvent, type UniqueIdentifier } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';

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

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overlayWidth, setOverlayWidth] = useState<number | null>(null);
  const [temporaryUrl, setTemporaryUrl] = useState('');

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5
      }
    })
  )

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    setActiveId(active.id);

    const activeElement = document.querySelector(`[data-tab-id="${event.active.id}"]`) as HTMLElement;
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      setOverlayWidth(rect.width);
      console.log(rect.width);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over?.id && active.id !== over.id) {
      setTabs((tabs) => {
        const oldIndex = tabs.findIndex(tab => tab.index === active.id);
        const newIndex = tabs.findIndex(tab => tab.index === over.id);

        return arrayMove(tabs, oldIndex, newIndex);
      })
    }

    setActiveId(null);
    setOverlayWidth(null);
  }

  return (
    <>
      <section className="tabs__header">
        <div className="tabs">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToHorizontalAxis]}
          >
            <SortableContext
              items={tabs.map(tab => tab.index)}
              strategy={horizontalListSortingStrategy}
            >
              {tabs.map(tab => <Tab key={tab.index} tab={tab} selectedTab={selectedTab} remove={remove} setSelectedTab={setSelectedTab} setPreviousTab={setPreviousTab} setTemporaryUrl={setTemporaryUrl} />)}
            </SortableContext>
            <DragOverlay>
              {activeId ? <Tab tab={tabs.find(tab => tab.index === activeId)!} selectedTab={selectedTab} remove={remove} setSelectedTab={(setSelectedTab)} setPreviousTab={setPreviousTab} width={overlayWidth} setTemporaryUrl={setTemporaryUrl} isOverlay /> : null}
            </DragOverlay>
          </DndContext>
        </div>
        <button onClick={add} className="tabs__add_button">
          <i className="ph ph-plus"></i>
        </button>
      </section>
      <BrowserURL selectedTab={selectedTab} setSelectedTab={setSelectedTab} setTabs={setTabs} setTemporaryUrl={setTemporaryUrl} temporaryUrl={temporaryUrl} />
      <Content url={selectedTab.url} />
    </>
  )
}