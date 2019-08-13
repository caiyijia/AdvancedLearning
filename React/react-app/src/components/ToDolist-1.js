import React from 'react'
import ToDoItem from './ToDoItem';

class ToDolist extends React.Component {
    render() {
        const {list} = this.props;
        return (
            <ul>
                {
                    list.map(
                        (item, index) => (
                        <ToDoItem index={index} key={item + index} task={item} deleteTask={this.props.fn}></ToDoItem>
                        )
                        )
                    }
            </ul>
        )
    }
}

export default ToDolist;