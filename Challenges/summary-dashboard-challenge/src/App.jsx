import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import reactionLogo from './assets/images/icon-reaction.svg'
import memoryLogo from './assets/images/icon-memory.svg'
import verbalLogo from './assets/images/icon-verbal.svg'
import visualLogo from './assets/images/icon-visual.svg'
import React from 'react';

import './App.css'

function TabularCard(props) {
  return (
    <div id={props.id} className='tabular-card' style={{background: `${props.bgcolor}`}}>
      <div>
        <img src={props.logo} alt={props.altdescription}/>
        &nbsp;&nbsp;
        <text style={{color:`${props.txtcolor}`}}>{props.label}</text>
      </div>
      <div>
        <text>{props.customNumber}</text>
        &nbsp;
        <text className='dark-label-text'>/ 100</text>
      </div>
    </div>
  );
}

function App() {
  return (
    <section id="results summary information" className='card' role="application">
      <div className='blue-card'>
        <div id="general information" className='inner-card'>
          <h1 className='label-text'>Your Result</h1>

          <div className='circle'>
            <h2 style={{color: 'hsl(0, 0%, 100%)', fontSize: '64px', margin: '0px'}}>76</h2>
            <p className='label-text' style={{marginTop: "0px"}}>of 100</p>
          </div>     

          <br></br>
          <h4 style={{color: 'hsl(0, 0%, 100%)', fontSize: '30px', fontWeight: '800', margin: '0px'}}>Great</h4>
          <p className='label-text'>You scored higher than 65% percent of the people who have taken those tests.</p>

        </div>
        
      </div>
      <div id="specific results information" className='white-card'>
        <h1 className='white-card-text'>Summary</h1>
        <TabularCard id="reaction" logo={reactionLogo} bgcolor='hsl(0, 100%, 98%)' label='Reaction' customNumber='80' txtcolor='hsl(0, 100%, 35%)' altdescription='red lightning icon'/>
        <TabularCard id="memory" logo={memoryLogo} bgcolor='hsl(39, 100%, 98%)' label='Memory' customNumber='92' txtcolor='hsl(39, 100%, 30%)' altdescription='yellow brain icon'/>
        <TabularCard id="verbal" logo={verbalLogo} bgcolor='hsl(166, 100%, 98%)' label='Verbal' customNumber='61' txtcolor=' hsl(166, 100%, 25%)' altdescription='green chat icon'/>
        <TabularCard id="visual" logo={visualLogo} bgcolor='hsl(234, 85%, 98%)' label='Visual' customNumber='72' txtcolor='hsl(234, 85%, 45%)' altdescription='blue eye icon'/>
        <button className='continue-button'>Continue</button>
      </div>
    </section>
  )
}

export default App
