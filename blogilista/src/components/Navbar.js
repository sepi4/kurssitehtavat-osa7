import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../reducers/userReducer'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul className='navbar'>
        <li><Link to={'/'}>Blogs</Link></li>
        <li><Link to={'/users'}>Users</Link></li>
        <li>
          {props.user.name ? props.user.name : props.user.username} is logged in <button onClick={() => { props.logoutUser() }}>logout</button>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(
  (state) => {
    return {
      blogs: state.blogs,
      user: state.user,
    }
  },
  mapDispatchToProps,
)(Navbar)
