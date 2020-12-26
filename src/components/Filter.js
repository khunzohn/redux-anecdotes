import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        console.log('target',event.target.value)
        const filter = event.target.value
        dispatch(setFilter(filter))
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

export default Filter