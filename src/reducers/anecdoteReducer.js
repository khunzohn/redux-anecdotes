export const asObject = (content) => {
  return {
    content,
    votes: 0,
  };
};

export const initAnecdotes = (results) => {
  return {
    type: "INIT_ANECDOTES",
    data: results,
  };
};

export const createVote = (id) => {
  return {
    type: "VOTE",
    data: id,
  };
};

export const newAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: anecdote,
  };
};

const initialState = [];

const reducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "VOTE":
      const id = action.data;
      return state.map((s) => {
        if (s.id === id) {
          return { ...s, votes: s.votes + 1 };
        } else {
          return s;
        }
      });
    case "NEW_ANECDOTE":
      const body = action.data;
      return state.concat(body);
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
