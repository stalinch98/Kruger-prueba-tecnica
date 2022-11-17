import {combineReducers} from "redux";
import LoginReduce from "./login/LoginReduce";
import AdministradorReduce from "./administrador/AdministradorReduce";
import EmpleadoReduce from "./empleado/EmpleadoReduce";

const rootReducers = combineReducers({
    LoginReduce,
    AdministradorReduce,
    EmpleadoReduce,
});

export default rootReducers;
