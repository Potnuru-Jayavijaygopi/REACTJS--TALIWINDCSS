import { useState } from 'react'
import Navbar from './component/Navbar'
import Graph from './component/Graph'
import Mobile from './component/Mobile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>  
    <Graph></Graph> 
    <Mobile></Mobile>
    </>
  )
}

export default App
