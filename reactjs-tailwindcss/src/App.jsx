import { useState } from 'react'
import Navbar from './component/Navbar'
import Graph from './component/Graph'
import Mobile from './component/Mobile'
import Features from './component/Features'
import Pricing from './component/Pricing'
import Reviews from './component/Reviews'
import FAQ from './component/FAQ'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>  
    <Graph></Graph> 
    <Mobile></Mobile>
    <Features></Features>
    <Pricing></Pricing>
    <Reviews></Reviews>
    <FAQ></FAQ>
    <Footer></Footer>
    </>
  )
}

export default App
