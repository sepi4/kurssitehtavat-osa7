import React from 'react'
import PropTypes from 'prop-types'

import Notification from './Notification'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'
import BlogsList from './BlogsList'

const LoggedView = ({
  blogs,
  user,
  handleLogout,
  handleAddNewBlog,
  handleLike,
  handleRemove,
  message
}) => {

  return (
    <div>
      <h1>Blogs</h1>
      <p>{user.name ? user.name : user.username} is logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      <Notification message={message} />
      <Togglable buttonLabel="new blog">
        <CreateNewBlog
          user={user}
          addNewBlog={handleAddNewBlog}
        />
      </Togglable>
      <BlogsList
        blogs={blogs}
        handleLike={handleLike}
        handleRemove={handleRemove}
        user={user}
      />
    </div>
  )
}

LoggedView.propTypes = {
  blogs: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleAddNewBlog: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  message: PropTypes.object,
}
export default LoggedView
