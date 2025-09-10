import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TabsProvider from './context/TabsProvider'

export type Tab = {
  index: number;
  name: string;
  url: string;
  content?: string;
}

function App() {
  return (
    <main>
      <Header />
      <TabsProvider>
        <Tabs />
      </TabsProvider>
    </main>
  )
}

export default App
