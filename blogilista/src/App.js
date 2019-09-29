import React, { useEffect } from 'react'
// import loginService from './services/login'

import LoginForm from './components/LoginForm'
import LoggedView from './components/LoggedView'

// import { useField } from './hooks/hooks'

import { connect } from 'react-redux'

import { setNotification } from './reducers/notificationReducer'
import { initBlogs, addBlog } from './reducers/blogReducer'
import { checkLocalStorage } from './reducers/userReducer'

import './index.css'

const App = (props) =>  {
  // const [ username, resetUsername ] =  useField('text')
  // const [ password, resetPassword ] =  useField('password')


  const { checkLocalStorage, initBlogs } = props
  useEffect(() => {
    checkLocalStorage()
    initBlogs()
  }, [checkLocalStorage, initBlogs])


  // const handleLogin = async e => {
  //   try {
  //     e.preventDefault()
  //     const user = await loginService.login({
  //       username: username.value,
  //       password: password.value,
  //     })
  //     window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
  //     // setUser(user)
  //     resetUsername()
  //     resetPassword()
  //   }
  //   catch (exception) {
  //     resetUsername()
  //     resetPassword()

  //     props.setNotification('wrong username or password', true, 10)
  //   }
  // }

  return (
    <div>
      {props.user === null
        ?  <LoginForm
          // username={username.value}
          // password={password.value}
          // setUsername={username.onChange}
          // setPassword={password.onChange}
          // handleLogin={handleLogin}
        />
        : <LoggedView
        />
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  setNotification,
  initBlogs,
  addBlog,
  checkLocalStorage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
