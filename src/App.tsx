import './App.css'
import BrowserURL from './components/BrowserURL'
import Content from './components/Content'
import Header from './components/Header'
import Tabs from './components/Tabs'

function App() {
  return (
    <main>
      <Header />
      <Tabs />
      <BrowserURL />
      <Content />
    </main>
  )
}

export default App
