import React from 'react';


class UnControl extends React.Component {
    taskB = React.createRef(); // ^16.3
    state = {
        list: []
    }
    render() {
        return (
            <>
            <div>
                task-A:                         
                <input type="text" ref={(dom)=> {this.taskA = dom}}></input>
                <button name="taskA" onClick={this.handleClick} >添加任务A</button>
            </div>
            <div>
            task-B:
            <input type="text" ref={this.taskB}></input>
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

    handleClick= (e) => {
        const type = e.target.name;
        let task = this[type];
        let taskVal = ''
        console.log(task)
        // console.log(task)
    //     const type = e.target.name;
    //     let task = this.state[type]
        if(type === 'taskA'){
            taskVal = task.value
            taskVal = `A: ${taskVal}`
            task.value = '';
        }else if(type === 'taskB'){
            taskVal = task.current.value
            taskVal = `B: ${taskVal}`
            task.current.value = ''
        }
        
        this.setState({
            list: [...this.state.list, taskVal],
        })
    }
}

export default UnControl;
