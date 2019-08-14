import React, { Component } from 'react';
import store from '../store'
import { getCountAddAction } from '../store/actionCreators'
class CCC extends Component {

    state = {
        count: store.getState().count
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count
            })
        })
    }

    render () {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleClick = (n) => {
        const action = getCountAddAction(3)
        store.dispatch(action)
    }

}

export default CCC;