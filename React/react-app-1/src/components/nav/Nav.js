import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './style.css'

// const withRouter = (Component) => () => {
// 	return <Route component={Component}></Route>
// }


class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<span className="logo" onClick={this.handleClick}>
					慌得要死
        </span>
				<NavLink to="/" exact>
					首页
        </NavLink>
				<NavLink to="/activities">动态</NavLink>
				<NavLink to="/topics">话题</NavLink>
				<NavLink to="/login">登录</NavLink>
			</div>
		)
	}

	handleClick = () => {
		console.log(this.props.history)
	}
}

export default withRouter(Nav);
