import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { logoutUser } from '../reducers/userReducer'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul className='navbar'>
        <li><Link to={'/'}>Blogs</Link></li>
        <li><Link to={'/users'}>Users</Link></li>
        <li>
          {props.user.name
            ? props.user.name
            : props.user.username} is logged in
          <button onClick={() => {
            props.logoutUser()
            props.history.push('/')
          }}>logout</button>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  logoutUser,
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user,
  }
}

export default compose(
  connect( mapStateToProps, mapDispatchToProps),
  withRouter
)(Navbar)
