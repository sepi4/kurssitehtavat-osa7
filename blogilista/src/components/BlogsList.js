import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


// import Blog from './Blog'

const BlogsList = (props) => {

  const sortedBlogs = props.blogit.sort((a, b) => -(a.likes - b.likes))

  console.log(props.blogit)
  return props.blogit.length > 0
    ?

    <ul>{sortedBlogs.map(
      blog => <li key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
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
