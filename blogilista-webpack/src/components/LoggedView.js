import React from 'react'
import PropTypes from 'prop-types'

import Notification from './Notification'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'
import BlogsList from './BlogsList'
import Users from './Users'
import User from './User'
import Blog from './Blog'
import Navbar from './Navbar'

import { logoutUser } from '../reducers/userReducer'
import { connect } from 'react-redux'

import { BrowserRouter as Router,
  Route
} from 'react-router-dom'

const LoggedView = (props) => {

  return (
    <Router>
      <div>
        <Navbar />

        <h1>blog app</h1>

        <Route exact path='/users' render={() => <Users />} />

        <Route exact path='/users/:id' render={({ match }) =>
          <User params={match.params.id}/>
        }/>

        <Route exact path='/' render={() =>
          <>
            <Notification />
            <Togglable buttonLabel="new blog">
              <CreateNewBlog />
            </Togglable>
            <BlogsList user={props.user} />
          </>
        }/>

        <Route exact path='/blogs/:id' render={({ match }) =>
          <Blog params={match.params.id} />
        }/>

      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    blogs: state.blogs,
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
