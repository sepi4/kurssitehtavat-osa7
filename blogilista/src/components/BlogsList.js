import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  List,
  Segment,
} from 'semantic-ui-react'

// import Blog from './Blog'

const BlogsList = (props) => {

  const sortedBlogs = props.blogit.sort((a, b) => -(a.likes - b.likes))

  return props.blogit.length > 0
    ?
    <Segment>
      <List divided relaxed>{sortedBlogs.map(
        blog => <List.Item key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </List.Item>)}
      </List>
    </Segment>
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
