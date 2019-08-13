import React from 'react'

class NewLifeCycle extends React.Component {
    static defaultProps = {}
    static PropType = {}

    constructor () {
        console.log('3. constructor')
        super();
        this.state = {
            childCount: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('3. getDerivedStateFromProps', props, state)
        return {
            w: 100
        }
    }
    /* Warning: getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined */

    render() {
        console.log('3. render')
        return (
            <div>另一个自组件的Count： { this.state.childCount }
                <button onClick={this.handleClick}>++childCount</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('3. componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('3. shouldComponentUpadte')
        return true
    }
    
    getSnapshotBeforeUpdate() {
        console.log('3. gerSnapshotBeforeUpdate')
        return {
            a: 10
        }
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('3. didUpdate', snapShot, prevProps, prevState)
    }

    handleClick = () => {
        this.setState({
            childCount: this.state.childCount + 1
        })
    }
}

export default NewLifeCycle