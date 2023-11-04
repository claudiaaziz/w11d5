// ! [5] applyMiddleware
import { createStore, combineReducers, applyMiddleware } from "redux";
// ! [6] thunk
import thunk from 'redux-thunk';
import teaReducer from "./teaReducer";
// ! [10a] logger import
import logger from 'redux-logger'


const rootReducer = combineReducers({
    teas: teaReducer
});

const configureStore = (preloadedState = {}) => {
    // ! [7] applyMiddleware(thunk)
    // ! [10b] add logger to applyMiddleware(thunk, logger)
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
};

export default configureStore;