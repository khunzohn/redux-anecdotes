import React from "react";
import { newAnecdote, asObject } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { removeMessage, setMessage } from "../reducers/notificationReducer";
import service from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const showNoti = (message) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 5000);
  };

  const createAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new content", content);

    const created = await service.addAnecdote(asObject(content))
    console.log('created',created)
    if(created) {
      dispatch(newAnecdote(created));
      showNoti(`you created ${created.content}`);
    } else {
      showNoti('Failed to create new anecdote')
    }
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
