import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './reducer';

const rootReducer = combineReducers({
  main: cartReducer,
});

export default rootReducer;
