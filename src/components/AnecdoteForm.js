import React from "react";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { removeMessage, setMessage } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const showNoti = (message) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 5000);
  };

  const createAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new content", content);
    dispatch(newAnecdote(content));
    showNoti(`you created ${content}`);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
