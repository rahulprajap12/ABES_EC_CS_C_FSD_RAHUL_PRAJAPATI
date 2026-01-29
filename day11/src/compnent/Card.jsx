import React from 'react'
import './cart.css'

function Card(props) {
  return (

    <div id ="cart">
      <img src="https://i.pinimg.com/originals/fe/b9/60/feb9600eac8cbb5d8419cbcfb2301fe2.jpg" alt="" height={150} width={300} />
      <h1>{props.name}</h1>
      <h1>{}</h1>
    </div>
  )
}

export default Card
