import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVote } from "../reducers/anecdoteReducer";
import { removeMessage, setMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes
      .filter(a => {
        console.log('a',a)
        if(filter) {
          return a.content.includes(filter)  
        } else {
          return true  
        }
      })
      .sort((a, b) => (a.votes < b.votes ? 1 : -1))
  );

  const showNoti = (message) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 5000);
  };

  const vote = (id) => {
    dispatch(createVote(id));
    showNoti(`you voted ${anecdotes.find((a) => a.id === id)?.content}`);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
