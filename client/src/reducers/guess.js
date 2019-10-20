const initialState = {
  guess_result: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_GUESS_RESULT":
      return {
        ...state,
        guess_result: payload
      };
    case "START_AGAIN":
      return {
        ...state,
        guess_result: null
      };
    default:
      return state;
  }
}
