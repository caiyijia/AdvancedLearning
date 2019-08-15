import React, { Component } from 'react';
// import store from '../store'
// import { bindActionCreators } from 'redux'
// import { getCountAddAction } from '../store/actions/counter'
import { connect } from 'react-redux'
import * as actions from '../store/actions/counter'
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

// const mapStateToProps = (state) => ({
//     count: state.counter.count
// })

// const mapDispatchToProps = (dispatch) => ({
//     add: (n) => {
//         dispatch(getCountAddAction(n))
//     }
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

const mapStateToProps = (state) => state.counter


export default connect(mapStateToProps, actions)(counter);