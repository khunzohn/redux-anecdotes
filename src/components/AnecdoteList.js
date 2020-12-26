import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes
      .filter((a) => {
        if (filter) {
          return a.content.includes(filter);
        } else {
          return true;
        }
      })
      .sort((a, b) => (a.votes < b.votes ? 1 : -1))
  );

  const vote = (anecdote) => {
    dispatch(createVote(anecdote));
    dispatch(setNotification(`you voted ${anecdote.content}`, 5));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
