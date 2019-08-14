import React from 'react';
import './style.css'

// 只负责渲染，用函数组件
const Articles = ({ match, location }) => {

  return (
    <div className="article">
        <div>
          文章ID：
          <span>{ match.params.id }</span>
        </div>
        <div>
          文章作者：
          {/* location只能接受跳转过来的的内容 */}
          <span>{ location.state && location.state.author }</span>
        </div>
        <div>
          文章标题：
          <span>{ location.state && location.state.title }</span>
        </div>
      </div>
  )
}


export default Articles;