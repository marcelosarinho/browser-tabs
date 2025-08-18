import { useState } from 'react'
import './App.css'
import BrowserURL from './components/BrowserURL'
import Content from './components/Content'
import Header from './components/Header'
import Tabs from './components/Tabs'

export type Tab = {
  index: number;
  name: string;
}

function App() {
  const [tabs, setTabs] = useState<Tab[]>([]);

  function newTab() {
    console.log(tabs.length);
  }

  return (
    <main>
      <Header />
      <Tabs tabs={tabs} />
      <BrowserURL />
      <Content />
    </main>
  )
}

export default App
