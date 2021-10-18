const initialState = { count: 0};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASEBYONE":
      return {
        ...state,
        count: state.count + 1
      };
    case "ZERO":
      return {
        ...state,
        count: 0
      };
    case "DECREASEBYONE":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}
