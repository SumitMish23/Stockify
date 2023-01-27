import watchlistReducer from './watchlist';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
watchlistReducer,
})

export default rootReducer;