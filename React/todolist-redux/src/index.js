import React from 'react';
import { render } from 'react-dom'
import TodoList from './components/TodoList.jsx'
import Counter from './components/Counter'

render(<><Counter /><TodoList /></>, document.getElementById('root'));

