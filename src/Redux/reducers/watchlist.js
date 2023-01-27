const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "watchlist":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default watchlistReducer;