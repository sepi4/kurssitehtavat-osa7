import React from 'react'
import PropTypes from 'prop-types'

import Notification from './Notification'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'
import BlogsList from './BlogsList'

import { logoutUser } from '../reducers/userReducer'
import { connect } from 'react-redux'

const LoggedView = (props) => {

  return (
    <div>
      <h1>Blogs</h1>
      <p>{props.user.name ? props.user.name : props.user.username} is logged in
        <button onClick={() => { props.logoutUser() }}>logout</button>
      </p>
      <Notification />
      <Togglable buttonLabel="new blog">
        <CreateNewBlog />
      </Togglable>
      <BlogsList
        user={props.user}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutUser,
}

LoggedView.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoggedView)
