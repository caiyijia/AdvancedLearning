import React from 'react'
import { Consumer } from './context'

// 1. 逐级向子组件传递函数
// 2. 利用Context API
class ToDoItem extends React.Component {
    render() {
        const {task, index} = this.props;
        return (
            <>
                <Consumer>
                    {
                        ({deleteTask}) => (
                            <li>
                                {task}
                                <button onClick={ () => deleteTask(index)}> x</button>
                            </li>
                        )
                    }
                </Consumer>
                
            </>
        )
    }
    // 逐级向子组件传递函数
    handleDlt = (index) => {
        // console.log(this.props)
        this.props.deleteTask(index)
    }
}


export default ToDoItem;