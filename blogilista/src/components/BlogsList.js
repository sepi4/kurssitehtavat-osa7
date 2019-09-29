import React from 'react'
import { connect } from 'react-redux'


import Blog from './Blog'

const BlogsList = (props) => {

  const sortedBlogs = props.blogit.sort((a, b) => -(a.likes - b.likes))

  return props.blogit.length > 0
    ?
    <ul>{sortedBlogs.map(
      blog => <li key={blog.id}>
        <Blog
          blog={blog}
          handleLike={props.handleLike}
          user={props.user}
        />
      </li>)}
    </ul>
    :
    null
}

const mapStateToProps = state => {
  return {
    blogit: state.blogs,
  }
}

export default connect(
  mapStateToProps,
  null,
)(BlogsList)
