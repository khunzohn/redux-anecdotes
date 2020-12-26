import service from "../services/anecdotes";

const asObject = (content) => {
  return {
    content,
    votes: 0,
  };
};

export const initAnecdotes = () => {
  return async (dispatch) => {
    const results = await service.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: results,
    });
  };
};

export const createVote = (anecdote) => {
  return async (dispatch) => {
    console.log('updating anecdot', anecdote)
    const updatedAnecdote = await service.updateAnecdote({
      ...anecdote,
      votes: anecdote.votes + 1,
    });

    console.log('updatedAnecdote', updatedAnecdote)
    if (updatedAnecdote) {
      dispatch({
        type: "VOTE",
        data: updatedAnecdote,
      });
    }
  };
};

export const newAnecdote = (content) => {
  return async (dispatch) => {
    const createdAnecdote = await service.addAnecdote(asObject(content));
    if (createdAnecdote) {
      dispatch({
        type: "NEW_ANECDOTE",
        data: createdAnecdote,
      });
    }
  };
};

const initialState = [];

const reducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "VOTE":
      const updatedAnecdote = action.data;
      return state.map((s) => {
        if (s.id === updatedAnecdote.id) {
          return updatedAnecdote
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
