import {combineReducers} from "redux";
import LoginReduce from "./login/LoginReduce";

const rootReducers = combineReducers({
    LoginReduce,
});

export default rootReducers;
