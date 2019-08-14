import React, { Component } from 'react';
import store from '../store'

class TodoList extends Component {

    // state = {
    //     inpVal: store.getState().inpVal,
    //     list: store.getState().list
    // }

    state = store.getState()

    componentDidMount() {
        store.subscribe(this.handleStoreChange)
    }
    
    render () {
        // console.log(store.getState());
        return (
            <>
            <div>
                <input value={this.state.inpVal} type="text"  onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>添加</button>
            </div>
            <ul>
                {this.state.list.map((item, index)=> (
                    <li key={index} style={{listStyle: 'circle'}}>
                        {item} 
                        <button onClick={()=>this.handleDlt(index)}>x</button>
                    </li>
                ))}
            </ul>
            </>
        )
    }

    handleChange = (e)=> {
        const action = {
            type: 'CHANGE_INPUT_VAL',
            value: e.target.value
        }
        store.dispatch(action);
    }

    

    handleAdd = () => {
        const action = {
            type: 'ADD_TODO_ITEM',
            value: this.state.inpVal
        }
        store.dispatch( action );
        // console.log(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }

    handleDlt = (index) => {
        const action = {
            type: 'DELETE_TODO_ITEM',
            index
        }
        store.dispatch(action)
    }
}

export default TodoList;