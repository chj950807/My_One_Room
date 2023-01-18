
import { combineReducers } from "redux";
import user from "./user"
import evaluate from "./evaluate"
const rootReducer = combineReducers({ user,evaluate });

export default rootReducer;