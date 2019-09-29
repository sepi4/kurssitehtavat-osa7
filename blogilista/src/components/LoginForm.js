import React from 'react'
import Notification from './Notification'

import { connect } from 'react-redux'
import { loginUser } from '../reducers/userReducer'


const LoginForm = (props) => {

  const loggaa = (e) => {
    e.preventDefault()
    props.loginUser({
      username: e.target.username.value,
      password: e.target.password.value,
    })
  }

  return (
    <div >
      <form onSubmit={loggaa}>
        <h1>log in to application</h1>
        <Notification />
        <div>
          <label>username
            <input
              type='text'
              name='username'
            />
          </label>
        </div>
        <div>
          <label>password
            <input
              type='password'
              name='password'
            />
          </label>
        </div>
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  loginUser
}

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm)
