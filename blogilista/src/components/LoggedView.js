import React from 'react'
import PropTypes from 'prop-types'

import Notification from './Notification'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'
import BlogsList from './BlogsList'

const LoggedView = ({
  user,
  handleLogout,
}) => {

  return (
    <div>
      <h1>Blogs</h1>
      <p>{user.name ? user.name : user.username} is logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      <Notification />
      <Togglable buttonLabel="new blog">
        <CreateNewBlog
          user={user}
        />
      </Togglable>
      <BlogsList
        user={user}
      />
    </div>
  )
}

LoggedView.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
export default LoggedView
