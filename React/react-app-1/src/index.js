import React from 'react';
import { render } from 'react-dom'
import { 
    BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom'
import Home from './pages/Home';
import Activities from './pages/Activities';
import Topics from './pages/Topics';
import Login from './pages/Login';
import './styles/index.css';
import './styles/reset.css'
// import Test from './pages/Test'

render(
    <Router>
        <div className="nav">
            <NavLink to='/'>首页</NavLink>
            <NavLink to='/activities'>动态</NavLink>
            <NavLink to='/topics'>话题</NavLink>
            <NavLink to='/login'>登陆</NavLink>
        </div>
        <div className="content">
        <Switch>
        <Route path='/' component={ Home }></Route>
        <Route path='/activities' component={Activities}></Route>
        <Route path='/topics' component={Topics}></Route>
        <Route path='/login' component={Login}></Route>
        </Switch>
        </div>
    </Router>,
    
    document.getElementById('root'));
