import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './assets/Component/Navbar/Navbar'
import Hero from './assets/Component/Hero/Hero'
import HeroReceiver from './assets/Component/Receiver/HeroReceiver'


function App() {
  const [count, setCount] = useState(0)
const [receiving,setReceiving]=useState(false);
useEffect(()=>{
  console.log("Receiving in App.jsx useEffect:", receiving);
},[receiving])
const handlefilechange= (isReceiving)=>{
  setReceiving(!isReceiving);
  console.log("Receiving in App.jsx:", receiving);
}
  return (
    <>
       <div className="veddrop-bg">
        <Navbar filechange={handlefilechange} setReceiving={setReceiving}/>
      
        {receiving?<HeroReceiver/>:<Hero/>}
       
        </div> 
    </>
  )
}

export default App
