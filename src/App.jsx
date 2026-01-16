import { useState } from 'react'
import './App.css'
import Navbar from './assets/Component/Navbar/Navbar'
import Hero from './assets/Component/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="veddrop-bg">
        <Navbar/>
        <Hero/>
        </div> 
    </>
  )
}

export default App
