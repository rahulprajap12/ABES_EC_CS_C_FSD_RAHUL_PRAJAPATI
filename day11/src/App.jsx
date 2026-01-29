import React from 'react'
import Card from './compnent/Card'
import Nave from './compnent/nave'
import './App.css'



function App() {
  return (
    <div>
      <Nave/>
      <h1>welcome our hotel</h1>
      <div id='cart1'><Card/>
      <br />
      <Card/>
      <br />
      <Card/>
      </div>
    </div>
  )
}

export default App
