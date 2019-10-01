import React from 'react'

import Comments from './Comments'
import BlogContent from './BlogContent'

import { connect } from 'react-redux'

const Blog = props => {
  const blogId = props.params
  const blog = props.blogs.find(b => b.id === blogId)
  if (blog === undefined) {
    return null
  }

  return (
    <div>
      <BlogContent blog={blog} />
      <Comments blog={blog} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
  }
}


export default connect(mapStateToProps, null)(Blog)
