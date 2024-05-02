import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Body from './Components/Body/Body.jsx'
import House from './Components/House/House.jsx'
import Card from "./Components/Cards/Card.jsx"
import Paradata from './Components/Paradata.js'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div>

     
      <Header />

      <Body />
  
      <House />

      <div id="cardholder">
        {
          Paradata.map((item,idx)=>{
            return <Card key={idx} paradatad={item.para} />
            
          })
        }
       
      </div>

      <Footer />
    </div>
  )

}

export default App
