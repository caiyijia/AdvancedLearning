// import todoList from './store/reducers/todoList';
// import counter from './store/reducers/counter'
import { compose } from 'redux'
// 1. reducer  2. {}   3. function(){}

const ActionTypes = {
    INIT: '@@redux/INIT'
}
export const createStore = (reducer, preloadedState, enhancer) => {
    if(typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState
        preloadedState = undefined;
    }
    if(typeof enhancer === 'function') {
        return enhancer(createStore)(reducer, preloadedState);
    }

    if(typeof reducer !== 'function') {
        throw new Error('传入的reducer必须为一个函数')
    }
    let state = preloadedState;
    let listeners = [];
    let isDispatching = false;

    const getState = () => state;

    const dispatch = (action) => {
        if(typeof action != 'object') {
            throw new Error('传入的action必须为一个简单对象')
        }

        if(typeof action.type === 'undefined') {
            throw new Error('aciton.type的值不能为undefined')
        }
        if(isDispatching) {throw new Error('不能在reducer中调用dispatch')}
        try {
            isDispatching = true;
            state = reducer(state, action);
        }finally {
            isDispatching = false;
        }
        
        listeners.forEach(item => item());
    }

    const subscribe = (fn) => {
        listeners.push(fn);
        return () => {
            const index = listeners.indexOf(fn);
            listeners.splice(index, 1)
        }
    }

    dispatch({type: ActionTypes.INIT})
    return {
        getState,
        dispatch,
        subscribe
    }
}


export const combineReducers = reducers => {
    const finalReducers = {};
    for(let key in reducers) {
        const reducer = reducers[key];

        if(typeof reducer === 'undefined') {
            console.error(`reducer ${key} 的值是 undefined`)
        }
        if(typeof reducer === 'function') {
            finalReducers[key] = reducer;
        }
    }

    for(let key in finalReducers) {
        const reducer = finalReducers[key];
        const state = reducer(undefined, {type:ActionTypes.INIT})

        if(typeof state === 'undefined') {
            throw new Error(`reducer ${key} 的值不能为undefined`)
        }
    }

    return (state={}, action) => {
        for(let key in finalReducers) {
            const reducer = finalReducers[key];
            const newState = reducer(state[key], action);
            state[key] = newState;
        }

        // state['todoList'] = todoList;
        // state['counter'] = counter;
        return state;
    }
}

export const bindActionCreators = (actions, dispatch) => {
    const boundAction = {};

    if(typeof actions != 'object' || actions === null){
        throw new Error('actions should be an object and not be a null')
    }

    for(let key in actions) {
        const actionCreator = actions[key];
        if(typeof actionCreator === 'function'){
            boundAction[key] = (...args) => dispatch(actionCreator(...args))
        }
    }

    return boundAction;
}


export const applyMiddleware = (...middleware) => (createStore) =>  (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);
    let dispatch = store.dispatch;

    const middlewareAPIs = middleware.map(item=>item({
        getState: store.getState,
        dispatch: action => dispatch(action)
    }))

    dispatch = compose(...middlewareAPIs)(dispatch);
    return {
        ...store,
        dispatch
    }
}

