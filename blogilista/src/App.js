import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogService from './services/blogs'

import LoginForm from './components/LoginForm'
import LoggedView from './components/LoggedView'

import { useField } from './hooks/hooks'

import { connect } from 'react-redux'
import { setNotification } from './reducers/notificationReducer'


import './index.css'

const App = (props) =>  {
  // const [username, setUsername] = useState('')
  const [ username, resetUsername ] =  useField('text')
  // const [password, setPassword] = useState('')
  const [ password, resetPassword ] =  useField('password')

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState(null)


  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
    }

    blogService
      .getAll()
      .then(bs => setBlogs(bs))
  }, [])

  const handleRemove = async blog => {

    const confirm = window.confirm(`Are you sure you want to remove "${blog.title}" by ${blog.author}?`)
    if (confirm ) {
      await blogService.removeBlog(blog, user.token)
      setBlogs(blogs.filter(b => b.id !== blog.id))
    }
  }

  const handleLike = async blog => {
    const updatedBlog = await blogService.likeBlog(blog)
    setBlogs(blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b))
  }

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

      // setMessage({
      //   text: 'wrong username or password',
      //   error: true,
      // })
      // setTimeout(() => {
      //   setMessage(null)
      // }, 3000)
      props.setNotification('wrong username or password', true, 10)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const handleAddNewBlog = newBlog => {
    setBlogs(blogs.concat(newBlog))
    setMessage({
      text: `you added new blog '${newBlog.title}', by ${newBlog.author}`,
      error: false,
    })
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }



  return (
    <div>

      {user === null
        ?  <LoginForm
          message={message}
          username={username.value}
          password={password.value}
          setUsername={username.onChange}
          setPassword={password.onChange}
          handleLogin={handleLogin}
        />
        : <LoggedView
          blogs={blogs}
          user={user}
          handleLogout={handleLogout}
          handleAddNewBlog={handleAddNewBlog}
          handleLike={handleLike}
          handleRemove={handleRemove}
          message={message}
        />
      }
    </div>
  )
}

const mapDispatchToProps = {
  setNotification,
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
