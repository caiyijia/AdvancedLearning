import React, { Component } from 'react';
// import store from '../store'
import { getCountAddAction } from '../store/actions/counter'
import { connect } from 'react-redux'
class counter extends Component {

    render () {
        return (
            <div>
                {this.props.count}
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleClick = () => {
        this.props.add(1)
    }

}

const mapStateToProps = (state) => ({
    count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
    add: (n) => {
        dispatch(getCountAddAction(n))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(counter);