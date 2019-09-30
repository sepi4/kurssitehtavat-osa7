import React from 'react'
import { connect } from 'react-redux'

import {
  List,
} from 'semantic-ui-react'


const User = (props) => {
  const userId = props.params

  const userBlogs = props.blogs.filter(b => b.user.id === userId)
  if (userBlogs.length === 0) {
    return null
  }

  const blogsList = () => {
    return <>
      <h3>added blogs</h3>
      <List divided relaxed>
        {userBlogs.map(b => <List.Item key={b.id}>{b.title}</List.Item>)}
      </List>
    </>
  }

  return (
    <div>
      <h2>{userBlogs[0].user.name ? userBlogs[0].user.name : userBlogs[0].user.username}</h2>
      {blogsList()}
    </div>
  )
}


export default connect(
  (state) => {
    return {
      blogs: state.blogs,
    }
  },
  null,
)(User)
