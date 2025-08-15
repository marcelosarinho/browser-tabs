import { useState } from 'react'
import './App.css'
import Tab from './components/Tab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Tab />
    </main>
  )
}

export default App
