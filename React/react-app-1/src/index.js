import React from 'react';
import { render } from 'react-dom'
import { 
    BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom'
import Home from './pages/home/Home';
import Activities from './pages/activities/Activities';
import Topics from './pages/topics/Topics';
import Login from './pages/login/Login';
import './styles/index.css';
import App from './App'
import Articles from './pages/activities/articles/Articles';
import PrivateRoute from './components/PrivateRoute'
import NoMatch from './pages/noMatch/NoMatch'

render(
    <Router>
    
        <App>
        <Switch>
            <Route path='/'  exact component={ Home }></Route>
            <Route path='/activities' component={Activities}></Route>
            <PrivateRoute path='/topics' component={Topics}></PrivateRoute>
            <Route path='/login' component={Login}></Route>
            <Route path="/article/:id" component={Articles}></Route>
            <Route path="/error.html" component={ NoMatch }></Route>
            <Redirect to='/error.html'></Redirect>
        </Switch>
        </App>
    
    </Router>,
    
    document.getElementById('root'));
