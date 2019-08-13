import React from 'react'

class ChildLifeCycle extends React.Component {
    render() {

        console.log('2. render')
        return (
            <div>我是子组件</div>
        )
    }

    /* * If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps */
    componentWillReceiveProps() {
        console.log('2. willReceive')
    }

    shouldComponentUpdate() {
        console.log('2. shouldUpdate')
        return true
    }

    componentWilluodata() {
        console.log('2. willUpdate')
    }

    componentDidUpdate() {
        console.log('2. didUpdate')
    }

    componentWillUnmount() {
        console.log('2. willUnmount')
    }
    
}

export default ChildLifeCycle