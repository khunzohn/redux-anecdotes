import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    
    const handleChange = (event) => {
        event.preventDefault()
        console.log('target',event.target.value)
        const filter = event.target.value
        props.setFilter(filter)
    }

    const style = {
        marginBottom: 0
    }

    return (
        <div style = {style}>
           filter <input  name="filterInput" onChange={handleChange}/>   
        </div>
    )
}

const mapDispatchToProps = {
    setFilter
}

export default connect(null, mapDispatchToProps) (Filter)