import React from 'react'
import { Route } from 'react-router-dom'

// component
// render
// children

const MenuLink = ({to, ...props}) => {
    return(
        <Route path={to} {...props} children={(p)=>{
            console.log(p.match)
            return (<span onClick={()=>{
                p.history.push(to)
            }}
            className={ p.match ? 'active' : ''}>{ props.children }</span>)
        }
        
    }></Route>
        
    )
}

export default MenuLink