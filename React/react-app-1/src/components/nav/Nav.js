import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import MenuLink from '../MenuLink'
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
				<MenuLink to="/" exact>
					首页
        </MenuLink>
				<MenuLink to="/activities">动态</MenuLink>
				<MenuLink to="/topics">话题</MenuLink>
				<MenuLink to="/login">登录</MenuLink>
			</div>
		)
	}

	handleClick = () => {
		console.log(this.props.history)
	}
}

export default withRouter(Nav);
