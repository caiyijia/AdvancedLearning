import React, { Component } from 'react';
import './style.css'
class Login extends Component {
  state = {
    isLogin: document.cookie.includes('login=true')
  }
  render() {
    return (
      <div className='login'>
        <button className='login-btn' onClick={this.handleClick}>
          {this.state.isLogin ? '注销' : '登陆'}</button>
      </div>
    )
  }

  handleClick = () => {
    const isLogin = this.state.isLogin;
    isLogin ? this.setCookie('login', '', -1) : this.setCookie('login', true, 7);
    this.setState({
      isLogin: !isLogin
    })
  }

  setCookie = (key, value, day) => {
    const expires = day * 86400
    const data = new Date(+new Date + expires)
    document.cookie = `${key}=${value}; expires=${data.toUTCString()}`
  }

}

export default Login;