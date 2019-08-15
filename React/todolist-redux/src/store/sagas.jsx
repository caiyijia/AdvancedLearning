import { takeEvery, put } from 'redux-saga/effects'
// import { addItem } from './actions/todoList';
import * as Types from './actionTypes'
// import { getTodoData } from './actions/todoList';
import axios from 'axios'
import * as actions from './actions/todoList'

function* mySaga() {
    yield takeEvery(Types.ADD_TODO_ITEM, addItem)
    yield takeEvery(Types.GET_TODO_DATA, getTodoData)
}

function* addItem() {
    yield console.log('add')
}

function* getTodoData() {
    try {
        const data = yield axios.get('list.json')
        const action = actions.getInitList(data)
        yield put(action)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
export default mySaga