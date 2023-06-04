import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='card' role="main">
      <div className='blue-card'>
        <div className='inner-card'>
          <text className='label-text'>Your Result</text>

          <div className='circle'>
            <text style={{color: 'hsl(0, 0%, 100%)', fontSize: '64px'}}>76</text>
            <text className='label-text'>of 100</text>
          </div>     

          <br></br>
          <text style={{color: 'hsl(0, 0%, 100%)', fontSize: '24px', fontStyle: 'extra-bold'}}>Great</text>
          <br></br>
          <br></br>
          <text className='label-text'>You scored higher than 65% percent of the people who have taken those tests.</text>

        </div>
        
      </div>
      <div className='white-card'>

      </div>
    </main>
    </>
  )
}

export default App
