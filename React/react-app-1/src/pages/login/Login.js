import React, { Component } from 'react';
import './style.css'
// import { from } from 'zen-observable';
class Login extends Component {
  state = {
    isLogin: document.cookie.includes('login=true')
  }
  render() {
    // console.log(this.props)
    return (
      <div className='login'>
        <button className='login-btn' onClick={this.handleClick}>
          {this.state.isLogin ? '注销' : '登陆'}</button>
      </div>
    )
  }

  handleClick = () => {
    const isLogin = this.state.isLogin;
    isLogin ? this.setCookie('login', '', -1) : this.setCookie('login', true, 7)
    this.setState({
      isLogin: !isLogin
    })
    this.jumpBack()
  }

  setCookie = (key, value, day) => {
    const expires = day * 86400
    const data = new Date(+new Date() + expires)
    document.cookie = `${key}=${value}; expires=${data.toUTCString()}`
  }

  jumpBack = () => {
    const { location, history } = this.props;
    // console.log(location)
    const from = location.state && location.state.from

    if (from) {
      alert('将跳转到之前页面...')
    }

    if (from === "/") {
      history.push({
        pathname: from,
        state: {
          article: location.state.article
        }
      })
    } else if (from) {
      history.push(from)
    }
  }

}

export default Login;