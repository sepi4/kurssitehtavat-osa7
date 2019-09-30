import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { logoutUser } from '../reducers/userReducer'

import {
  Menu,
  Button,
} from 'semantic-ui-react'

const Navbar = (props) => {

  const logout = () => {
    props.logoutUser()
    props.history.push('/')
  }

  return (
    <div>
      <Menu>
        <Menu.Item><Link to={'/'}>Blogs</Link></Menu.Item>
        <Menu.Item><Link to={'/users'}>Users</Link></Menu.Item>
        <Menu.Item position='right'>
          {props.user.name
            ? props.user.name
            : props.user.username} is logged in <Button
            floated='right'
            size='mini'
            onClick={logout}>logout</Button>
        </Menu.Item>
      </Menu>
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
