import React from 'react'
import Notification from './Notification'

import { connect } from 'react-redux'
import { loginUser } from '../reducers/userReducer'

import {
  Form,
  Button,
} from 'semantic-ui-react'


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
      <Form onSubmit={loggaa}>
        <h1>log in to application</h1>
        <Notification />
        <Form.Field>
          <label>username
            <input
              type='text'
              name='username'
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label>password
            <input
              type='password'
              name='password'
            />
          </label>
        </Form.Field>
        <Form.Field>
          <Button type="submit">login</Button>
        </Form.Field>
      </Form>
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
