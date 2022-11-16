import {applyMiddleware, compose, legacy_createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./rootReducers";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = legacy_createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;