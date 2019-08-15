import React, { Component } from 'react';
import { createStore } from '../redux'

const initState = {
    inpVal: ''
}

function reducer(state=initState, action) {
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'CHANGE_VAL':
            newState.inpVal = action.value
            return newState;
    
        default:
            break;
    }
    if(!state) {
        state = initState;
    }
    return state
}

const store = createStore(reducer);
console.log(store.getState())

createStore(reducer);

class Input extends Component {

    state = store.getState()
    componentDidMount() {
        this.unsub = store.subscribe(() => {
            this.setState(store.getState());
            this.unsub()
        })
    }

    render() {
        return (
            <div>
                Input:
                <input type="text" value={this.state.inpVal} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Click</button>
                <p>{this.state.inpVal}</p>
            </div>
        )
    }
    handleChange =(e) => {
        const action= {
            type: 'CHANGE_VAL',
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleClick = () => {
        console.log(store.getState().inpVal)
    }

}

export default Input;