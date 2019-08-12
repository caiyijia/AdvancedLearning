import React from 'react';


class Control extends React.Component {

    state = {
        taskA: '',
        taskB: '',
        list: []
    }
    render() {
        return (
            <>
            <div>
                task-A:
                <input type="text" name="taskA" onChange={this.handle} value={this.state.taskA} onKeyUp={this.onKeyUp}></input>
                <button name="taskA" onClick={this.handleClick} >添加任务A</button>
            </div>
            <div>
            task-B:
            <input type="text" name="taskB" onChange={this.handle} value={this.state.taskB} onKeyUp={this.onKeyUp}></input>
            <button name="taskB" onClick={this.handleClick}>添加任务B</button>
            </div>
            <ul>
                {                            // 箭头函数返回用的是（）
                    this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            </>
        )
    }
    onKeyUp = (e) => e.keyCode === 13 && this.handleClick(e)
    handle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick= (e) => {
        const type = e.target.name;
        let task = this.state[type]
        if(type === 'taskA'){
            task = `A: ${task}`
        }else if(type === 'taskB'){
            task = `B: ${task}`            
        }
        this.setState({
            list: [...this.state.list, task],
            [type]: ''
        })
    }
}

export default Control;
