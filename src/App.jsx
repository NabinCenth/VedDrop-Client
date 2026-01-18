import { useState } from 'react'
import './App.css'
import Navbar from './assets/Component/Navbar/Navbar'
import Hero from './assets/Component/Hero/Hero'
import HeroReceiver from './assets/Component/Receiver/HeroReceiver'


function App() {
  const [count, setCount] = useState(0)
const [receiving,setReceiving]=useState(false);
// const handlefilechange= (isReceiving)=>{
//   setReceiving(!isReceiving);
//   console.log("Receiving in App.jsx:", receiving);
// }
  return (
    <>
       <div className="veddrop-bg">
        <Navbar filechange={handlefilechange}/>
        {/* <Hero/> */}
        <HeroReceiver/>
        </div> 
    </>
  )
}

export default App
