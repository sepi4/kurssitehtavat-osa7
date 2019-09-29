import React from 'react'
import PropTypes from 'prop-types'

import Notification from './Notification'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'
import BlogsList from './BlogsList'
import Users from './Users'

import { logoutUser } from '../reducers/userReducer'
import { connect } from 'react-redux'

import { BrowserRouter as Router,
  Route
} from 'react-router-dom'

const LoggedView = (props) => {

  return (
    <Router>
      <div>
        <h1>blogs</h1>
        <p>{props.user.name ? props.user.name : props.user.username} is logged in
          <button onClick={() => { props.logoutUser() }}>logout</button>
        </p>
        <Route exact path='/users' render={() => <Users />} />
        <Route exact path='/' render={() =>
          <>
            <Notification />
            <Togglable buttonLabel="new blog">
              <CreateNewBlog />
            </Togglable>
            <BlogsList
              user={props.user}
            />
          </>
        }/>
      </div>
    </Router>
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
