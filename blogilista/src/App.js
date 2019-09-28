import React, { useState, useEffect } from 'react'
import loginService from './services/login'

import LoginForm from './components/LoginForm'
import LoggedView from './components/LoggedView'

import { useField } from './hooks/hooks'

import { connect } from 'react-redux'
import { setNotification } from './reducers/notificationReducer'
import { initBlogs, addBlog } from './reducers/blogReducer'




import './index.css'

const App = (props) =>  {
  // const [username, setUsername] = useState('')
  const [ username, resetUsername ] =  useField('text')
  // const [password, setPassword] = useState('')
  const [ password, resetPassword ] =  useField('password')

  const [user, setUser] = useState(null)


  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
    }
    props.initBlogs()
  }, [props])


  const handleLogin = async e => {
    try {
      e.preventDefault()
      const user = await loginService.login({
        username: username.value,
        password: password.value,
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      setUser(user)
      // setUsername('')
      // setPassword('')
      // username.reset()
      // password.reset()
      resetUsername()
      resetPassword()
    }
    catch (exception) {
      // setUsername('')
      // setPassword('')
      // username.reset()
      // password.reset()
      resetUsername()
      resetPassword()

      props.setNotification('wrong username or password', true, 10)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }



  return (
    <div>

      {user === null
        ?  <LoginForm
          username={username.value}
          password={password.value}
          setUsername={username.onChange}
          setPassword={password.onChange}
          handleLogin={handleLogin}
        />
        : <LoggedView
          user={user}
          handleLogout={handleLogout}
        />
      }
    </div>
  )
}

const mapDispatchToProps = {
  setNotification,
  initBlogs,
  addBlog,
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
