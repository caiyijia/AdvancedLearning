import React, { Component } from 'react';
import store from '../store'
// import * as Types from '../store/actionTypes'
import * as Actions from '../store/actions/todoList'

class TodoList extends Component {

    // state = {
    //     inpVal: store.getState().inpVal,
    //     list: store.getState().list
    // }

    state = store.getState().todoList

    componentDidMount() {
        store.subscribe(this.handleStoreChange)
    }

    render() {
        // console.log(store.getState());
        return (
            <>
                <div>
                    <input value={this.state.inpVal} type="text" onChange={this.handleChange} />
                    <button onClick={this.handleAdd}>添加</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index} style={{ listStyle: 'circle' }}>
                            {item}
                            <button onClick={() => this.handleDlt(index)}>x</button>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    handleChange = (e) => {
        const action = Actions.getTodoChangeInputValAction(e.target.value)
        store.dispatch(action);
    }

    handleAdd = () => {
        // const action = {
        //     type: Types.ADD_TODO_ITEM,
        //     value: this.state.inpVal
        // }
        const action = Actions.getTodoAddTodoItemAction(this.state.inpVal)
        store.dispatch(action);
        // console.log(action)
    }

    handleDlt = (index) => {
        const action = 
        Actions.getTodoDeleteItemAction(index)
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState().todoList)
    }
}

export default TodoList;