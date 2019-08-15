// import {createStore, applyMiddleware, compose} from 'redux'
import {createStore, applyMiddleware, compose} from '../redux'

import reducer from './reducers'
// import thunk from 'redux-thunk'
// import promise from 'redux-promise'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [ thunk, promise, logger ]
const middleware = [ sagaMiddleware, logger ]

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(mySaga)

export default store;