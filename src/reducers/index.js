import { combineReducers } from 'redux';
import favoriteReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const combinedReducers = combineReducers({
  movieReducer,
  favoriteReducer
})

export default combinedReducers;