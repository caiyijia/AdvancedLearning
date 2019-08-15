import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
const store = createStore(
    reducer,
    applyMiddleware(thunk, promise, logger)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;