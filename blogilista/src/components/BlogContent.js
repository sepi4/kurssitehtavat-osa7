import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { likeBlog, removeBlog } from '../reducers/blogReducer'


const BlogContent = (props) => {
  const blog = props.blog

  const handleRemoveBlog = () => {
    const confirm = window.confirm(`Are you sure you want to remove "${blog.title}" by ${blog.author}?`)
    if (confirm ) {
      props.removeBlog(blog, props.user.token)
      props.history.push('/')
    }
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <div>author: {blog.author}</div>
      <div>added by: {blog.user.name ? blog.user.name : blog.user.username}</div>
      <div>url: <a href={'//'+blog.url}>{blog.url}</a></div>
      <div>likes: {blog.likes}
        <button onClick={() => { props.likeBlog(blog) }}>like </button>
      </div>
      {
        props.user.id === blog.user.id
          ? <button onClick={handleRemoveBlog} >remove</button>
          : null
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  likeBlog,
  removeBlog,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(BlogContent)
