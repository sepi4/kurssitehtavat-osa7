import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'


import { likeBlog, removeBlog } from '../reducers/blogReducer'
import { withRouter } from 'react-router-dom'

const Blog = props => {
  const blogId = props.params
  const blog = props.blogs.find(b => b.id === blogId)
  if (blog === undefined) {
    return null
  }

  const handleRemoveBlog = () => {
    const confirm = window.confirm(`Are you sure you want to remove "${blog.title}" by ${blog.author}?`)
    if (confirm ) {
      props.removeBlog(blog, props.user.token)
      props.history.push('/')
    }
  }

  return ( <div>
    <div >
      <h2>
        {blog.title}
      </h2>
      <div>author: {blog.author}</div>
      <div>added by: {blog.user.name ? blog.user.name : blog.user.username}</div>
      <div>url: <a href={blog.url}>{blog.url}</a></div>
      <div>likes: {blog.likes}
        <button onClick={() => { props.likeBlog(blog) }}
        >like
        </button>
      </div>
      {props.user.id === blog.user.id
        ? <button onClick={handleRemoveBlog} >remove</button>
        : null
      }
    </div>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
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
)(Blog)
