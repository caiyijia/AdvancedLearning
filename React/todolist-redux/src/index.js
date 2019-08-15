import React from 'react';
import { render } from 'react-dom'
import TodoList from './components/TodoList.jsx'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './store'

render(<Provider store={store}>
    <Counter />
    <TodoList />
    </Provider>, document.getElementById('root'));

