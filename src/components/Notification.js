import React from 'react'
import { useSelector } from 'react-redux'  

const Notification = () => {

  const message = useSelector( state => state.message)

  const display = !message ? 'none' : ''
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: display
  }

  return (
    <div style={style}>
        {message}
    </div>
  )
}

export default Notification