import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import MusicHome from './pages/MusicHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MusicHome />
    </>
  )
}

export default App
