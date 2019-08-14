import React, { Component } from 'react';
import Nav from './components/nav/Nav';
// import { Route } from 'react-router-dom'
import './styles/app.css'

class App extends Component {

    render() {
        return (
            <div className="app">
                <Nav></Nav>
                {/* <Route path="/" component={Nav}></Route> */}
                <div className="content">
                    {this.props.children}
                </div>

            </div>
        )
    }

}

export default App;