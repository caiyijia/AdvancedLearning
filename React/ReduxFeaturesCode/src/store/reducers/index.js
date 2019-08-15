// import { combineReducers } from 'redux';
import todoList from './todoList';
import counter from './counter';
import { combineReducers } from '../../redux'

export default combineReducers({
  todoList,
  counter
})

