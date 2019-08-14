import React, { Component } from 'react';
import store from '../store'
import { getCountAddAction } from '../store/actions/counter'
class CCC extends Component {

    state = store.getState().counter
    

    componentDidMount() {
        store.subscribe(() => {
            this.setState(
                store.getState().counter
            )
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