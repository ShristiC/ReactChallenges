import { useState } from 'react'
import luxuryIcon from './assets/icon-luxury.svg'
import sedanIcon from './assets/icon-sedans.svg'
import suvIcon from './assets/icon-suvs.svg'

import './App.css'

function Card(props) {
  return (
    <section className='card' style={{backgroundColor: `${props.bgcolor}`}}>
      <img className='align-left' src={props.icon}></img>
      <h2 className='align-left'>{props.label}</h2>
      <p className='align-left'>{props.text}</p>
      <button className='button' style={{color: `${props.bgcolor}`, fontFamily: 'Lexend Deca'}}>Learn More</button>
    </section>
  )
}

function App() {

  return (
    <main>
      <section className="main-section">
        <Card bgcolor='hsl(31, 77%, 52%)' icon={sedanIcon} label="SEDANS" text= "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."></Card>
        <Card bgcolor='hsl(184, 100%, 22%)' icon={suvIcon} label="SUVS" text= "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."></Card>
        <Card bgcolor= 'hsl(179, 100%, 13%)' icon={luxuryIcon} label="LUXURY" text="Cruise is the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."></Card>
      </section>
    </main>
  )
}

export default App
