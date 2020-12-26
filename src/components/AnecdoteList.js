import React from "react";
import { connect } from "react-redux";
import { createVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.createVote(anecdote);
    props.setNotification(`you voted ${anecdote.content}`, 5);
  };

  return (
    <div>
      {props.anecdotes.map((anecdote) => (
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

const mapStateToProps = ({ anecdotes, filter }) => {
  return {
    anecdotes: anecdotes
      .filter((a) => {
        if (filter) {
          return a.content.includes(filter);
        } else {
          return true;
        }
      })
      .sort((a, b) => (a.votes < b.votes ? 1 : -1)),
  };
};

const mapDispatchToProps = {
  createVote,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
