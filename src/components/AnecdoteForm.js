import React from "react";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  
  const createAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new content", content);

    props.newAnecdote(content);
    props.setNotification(`you created ${content}`, 5);
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

const mapDispatchToProps = {
  setNotification,
  newAnecdote
}

export default connect(null, mapDispatchToProps) (AnecdoteForm);
