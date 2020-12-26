import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addAnecdote = async (anecdote) => {
    const response = await axios.post(baseUrl, anecdote )
    return response.data
}

const updateAnecdote = async (anecdote) => {
    console.log('updating one', anecdote)
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    console.log('update response', response)
    return response.data
}

export default {
    getAll,
    addAnecdote,
    updateAnecdote
}