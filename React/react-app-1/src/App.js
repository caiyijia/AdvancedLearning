import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import './styles/app.css'

class App extends Component {

    render () {
        return (
        <div className="app">
            <Nav></Nav>
            <div className="content">
            { this.props.children }
            </div>
            
        </div>
    )
    }

}

export default App;