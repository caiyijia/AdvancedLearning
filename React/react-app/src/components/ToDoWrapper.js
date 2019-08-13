import React from 'react'
import ToDoList from './ToDolist-1'
import { Provider } from './context';

// 1. 逐级向子组件传递函数
// 2. 利用Context API
class ToDoWrapper extends React.Component {
    task = React.createRef();
    state = {
        list: []
    }
    render() {
        return (
            <Provider value={{deleteTask: this.deleteTask}}>
                <div>
                    <input type="text" ref={this.task}></input>
                    <button onClick={this.handleClick}>添加</button>
                </div>
                <ToDoList  list={this.state.list} fn={this.deleteTask}></ToDoList>
            </Provider>
        )
    }

    handleClick = () => {
        this.setState({
            list:[...this.state.list, this.task.current.value]
        })
        this.task.current.value = '';
    }

    deleteTask = (index) => {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default ToDoWrapper;