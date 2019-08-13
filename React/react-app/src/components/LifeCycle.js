import React from 'react'
import ChildLifeCycle from './ChildLifeCycle';


class LifeCycle extends React.Component {
    static defaultProps = {}
    static propTypes= {}
    constructor () {
        console.log('1. constructor')
        super();
        this.state = {
            count: 0
        }
    }
    componentWillMount() {
        // ajax 官方不建议 17.x 移除
        /* In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
        console.log('1. willMount') */
    }

    render() {
        console.log('1. render')

        return(
            <>
            <div>
                count的值： { this.state.count }
                <button onClick={this.handleClick}>增加count的值</button>
            </div>
            {
                this.state.count === 0 && <ChildLifeCycle></ChildLifeCycle>
            }
            
            </>
        )
    }

    componentDidMount() {
        // ajax setState()
        console.log('1. didMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.count === this.state.count)
        console.log('1. shouldComponentUpdate')
        return !true
    }

    componentWillUpdate() {
        console.log('1. willUpdate')
    }

    componentDidUpdate() {
        console.log('1. didUpdate')
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 0
        })
    }
}

export default LifeCycle