import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route {...props} render={(p) => {
            const isLogin = document.cookie.includes('login=true');
            // const Component = component;
            if (isLogin) {
                return (<Component></Component>)
            } else {
                alert('请先登陆哦～')
                return <Redirect to={{
                    pathname: '/login',
                    state: {
                        from: p.location.pathname
                }
                }}></Redirect >

            }
        }}></Route >
    )
}

export default PrivateRoute