import conterReducer from "./counter";
import loggedReduced from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: conterReducer,
  isLogged: loggedReduced,
});

export default allReducers;
