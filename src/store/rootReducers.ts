import {combineReducers} from "redux";
import LoginReduce from "./login/LoginReduce";
import AdministradorReduce from "./administrador/AdministradorReduce";

const rootReducers = combineReducers({
    LoginReduce,
    AdministradorReduce,
});

export default rootReducers;
