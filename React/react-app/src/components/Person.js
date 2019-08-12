import React from 'react'
import PropTypes from 'prop-types';
// import { of } from 'zen-observable';

class Person extends React.Component {
    state = {
        name: this.props.name
    }
    static defaultProps = {
        name: 'CCC'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['m', 'f']),
        figure: PropTypes.objectOf(PropTypes.string),
        hobby: PropTypes.arrayOf(PropTypes.string),
        salary(props, propsName, componentName) {
            if(props[propsName] < 8000) {
                return new Error(`${componentName}组件传递过来的${propsName}属性过小，应大于8000`)
            }
        }
    }
    render() {
        const { name, age, sex, figure, hobby, salary } = this.props
        return (
        <>
            <div>{name} 个人资料</div>
            <div>年龄：{ age }</div>
            <div>性别：{ sex }</div>
            <div>身高：{ figure.height }</div>
            <div>体重：{ figure.weight }</div>
            <div>兴趣：{ hobby }</div>
            <div>薪资：{ salary }/月</div>

            <button onClick={this.handleClick}></button>
        </>
        )
    }

    handleClick = () => {
        this.setState({
            name: 'CCC'
        })
    }
}


export default Person