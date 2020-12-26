import React from 'react'
import { connect } from 'react-redux'  

const Notification = (props) => {

  const message = props.message

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

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Notification)