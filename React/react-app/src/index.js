import React from 'react'
import { render } from 'react-dom'
import ToDoWrapper from './components/ToDoWrapper';
// import Person from './components/Person';

// const person = {
//     // name: 'Yijia',
//     age: 22,
//     sex: 'm',
//     figure: {
//         weight: '70Kg',
//         height: '175cm'
//     },
//     hobby: ['Movie', ' Jog'],
//     salary: 1000
// }

render(<ToDoWrapper></ToDoWrapper>, document.getElementById('root'))