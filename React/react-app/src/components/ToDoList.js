import React from 'react'

// 组件一定要大驼峰
class ToDoList extends React.Component {
    // 状态
    // constructor () {
        // super();
        // this.state = {
        //     list:[1, 2, 3]
        // }
    // }
    // es7 写法 等价于以上
    state = {
        inpVal: '',
        list: [1, 2, 3],
        count: 0
    }
    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.inpVal} onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index)=>(
                            <li key={index}>{item}
                                {/* 为了给handleDlt()内传参 */}
                                <button onClick={() => {this.handleDlt(index)}}>x</button>
                            </li>
                        ))
                    }
                    
                </ul>
                <div>
                    <span>{this.state.count}</span>
                    <button onClick={this.handleAdd}>添加</button>
                </div>
            </>
        )
    }
    // 最好用箭头函数，因为箭头函数内部的this其实是外层函数的this
    handleChange = (e) => {
        this.setState({
            inpVal: e.target.value
        })
    }
    handleClick = ()=>{
        this.setState({
            list:[...this.state.list, this.state.inpVal],
            inpVal:''
        })
    }
    handleDlt = (index)=> {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list
        })
    }
    handleAdd =() => {
        // React 批量更新，相同的对象属性赋值，后面的会覆盖前面的，故最终结果只是+3
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 2
        // })
        // this.setState({
        //     count: this.state.count + 3
        // })

        // 传入函数解决上述问题
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState)=> {
            return {
                count: prevState.count + 2
            }
        })
        this.setState((prevState)=> {
            return {
                count: prevState.count + 3
            }
        })
        
    }
}

export default ToDoList;