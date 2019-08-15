import React, { Component } from 'react';
import { connect } from 'react-redux'
// import store from '../store'
// import * as Types from '../store/actionTypes'
import * as actions from '../store/actions/todoList'
import axios from 'axios';
axios.interceptors.response.use(res => {
    if(res.data.code === 0 ){
        return res.data.data;
    }
    return Promise.reject('请求出错')
})

axios.interceptors.request.use(config => {
    // console.log(config);
    config.headers.token = Math.random().toFixed(15) * 1e15;
    return config
})

class TodoList extends Component {

    componentDidMount () {
        this.props.getTodoData()
        // axios.get('/list.json').then(res => {
        //     // console.log(res);
        //     this.props.getInitList()
        // })
    }

    render() {
        const { inpVal, list } = this.props
        return (
            <>
                <div>
                    <input value={inpVal} type="text" onChange={this.handleChange} />
                    <button onClick={this.handleAdd}>添加</button>
                </div>
                <ul>
                    {list.map((item, index) => (
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
        this.props.changeVal(e.target.value)
    }

    handleAdd = () => {
        this.props.addItem( this.props.inpVal )
    }

    handleDlt = (index) => {
        this.props.deleteItem(index)
    }

    // handleStoreChange = () => {
    //     this.setState(store.getState().todoList)
    // }
}

const mapStateToProps = (state) => ({
    inpVal: state.todoList.inpVal,
    list: state.todoList.list
})

// const mapDispatchToProps = (dispatch) => ({
//     changeVal: (val) => {
//         dispatch(Actions.getTodoChangeInputValAction(val))
//     },
//     addItem: (val) => {
//         dispatch(Actions.getTodoAddTodoItemAction(val))
//     },
//     deldeteItem: (index) => {
//         dispatch(Actions.getTodoDeleteItemAction(index))
//     }
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, actions)(TodoList);