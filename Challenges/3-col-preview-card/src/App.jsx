import { useEffect, useState } from 'react'
import luxuryIcon from './assets/icons/icon-luxury.svg'
import sedanIcon from './assets/icons/icon-sedans.svg'
import suvIcon from './assets/icons/icon-suvs.svg'

import './App.css'

function Card(props) {
  var clickable_item = console.log(`clicked the button to Learn More! ${props.label.toLowerCase()}`);
  var label_lowercase = props.label.toLowerCase();

  return (
    <div id={label_lowercase} role="presentation" className='card' style={{backgroundColor: `${props.bgcolor}`}} aria-label={label_lowercase}>
      <img className='align-left' src={props.icon} alt={props.altText}></img>
      <h2 className='align-left'>{props.label}</h2>
      <p className='align-left'>{props.text}</p>
      <button className='button align-left' type="button" style={{color: `${props.bgcolor}`, fontFamily: 'Lexend Deca'}} onClick={clickable_item} onKeyDown={clickable_item} tabIndex={0}>Learn More</button>
    </div>
  )
}

function App() {

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // small screen < 640, medium (tablets) < 1009, laptops >= 1009
  // coding for mobile designs
  const isMobile = windowDimension <= 640;

  var cssStyle = 'main-section ' + (isMobile ? 'responsive-development' : '');

  return (
    <main className={cssStyle} aria-label='main-section' id='main'>
      <Card bgcolor='hsl(31, 77%, 35%)' icon={sedanIcon} altText="Sedan Car Icon" label="SEDANS" text= "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."></Card>
      <Card bgcolor='hsl(184, 100%, 22%)' icon={suvIcon} altText="SUV Car Icon" label="SUVS" text= "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."></Card>
      <Card bgcolor= 'hsl(179, 100%, 13%)' icon={luxuryIcon} altText="Luxury Car Icon" label="LUXURY" text="Cruise is the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."></Card>
    </main>
  )
}

export default App
