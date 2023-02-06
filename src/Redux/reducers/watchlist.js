const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "watchlist":
      if(state.includes(action.payload)){
        return [...state];
      }
      else{
        return [...state, action.payload];
      }
     
    default:
      return [...state];
  }
};
export default watchlistReducer;