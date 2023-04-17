import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'

function ColorSquare() {
  const color = useSelector(state => state.color)
  const dispatch = useDispatch()

  function handleClick() {
    const colors = ['blue', 'red', 'yellow', 'green', 'purple', 'black', 'pink']
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    dispatch({ type: 'SET_COLOR', payload: newColor })
  }

  return (
    <div className="colorSquare">
      <div
        style={{ backgroundColor: color, width: '200px', height: '200px' }}
      ></div>
      <button onClick={handleClick}>Mude a cor</button>
    </div>
  )
}

export default ColorSquare
