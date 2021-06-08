import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import photoReducer from "./reducers/photoReducer";
import projectSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  photo: photoReducer,
});

export type stateType = ReturnType<typeof reducers>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(projectSaga);

export default store;
