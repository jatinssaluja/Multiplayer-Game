import axios from "axios";

// Get Guess Result
export const getGuessResult = playerData => async dispatch => {
  const res = await axios.get("/api", {
    params: playerData
  });

  //console.log(res.data);

  dispatch({
    type: "GET_GUESS_RESULT",
    payload: res.data
  });
};

// Start New Game
export const startNewAction = () => async dispatch => {
  dispatch({
    type: "START_AGAIN"
  });
};
