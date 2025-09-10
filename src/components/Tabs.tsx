import BrowserURL from './BrowserURL';
import Content from './Content';
import './Tabs.css';
import Tab from './Tab';
import { useState } from 'react';
import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors, type DragEndEvent, type DragStartEvent, type UniqueIdentifier } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { useTabs } from '../context/TabsContext';

export default function Tabs() {
  const { tabs, setTabs, addTab, selectedTab } = useTabs();

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overlayWidth, setOverlayWidth] = useState<number | null>(null);

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
              {tabs.map(tab => <Tab key={tab.index} tab={tab} />)}
            </SortableContext>
            <DragOverlay>
              {activeId ? <Tab tab={tabs.find(tab => tab.index === activeId)!} width={overlayWidth} isOverlay /> : null}
            </DragOverlay>
          </DndContext>
        </div>
        <button onClick={addTab} className="tabs__add_button">
          <i className="ph ph-plus"></i>
        </button>
      </section>
      <BrowserURL />
      <Content url={selectedTab.url} />
    </>
  )
}