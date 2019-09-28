import React from 'react'
import Notification from './Notification'

// import { useField } from '../hooks/hooks'


const LoginForm = ({
  message,
  username,
  password,
  setUsername,
  setPassword,
  handleLogin
}) => {

  // const usernameArg = useField('text', username, setUsername)
  // const passwordArg = useField('password', password, setPassword)

  return (
    <div >
      <form onSubmit={handleLogin}>
        <h1>log in to application</h1>
        <Notification message={message} />
        <div>
          username
          <input
            type='text'
            value={username}
            onChange={setUsername}
          />
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            onChange={setPassword}
          />
        </div>
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
