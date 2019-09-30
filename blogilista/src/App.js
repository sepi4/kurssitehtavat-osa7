import React, { useEffect } from 'react'

import LoginForm from './components/LoginForm'
import LoggedView from './components/LoggedView'

import { connect } from 'react-redux'

import { initBlogs } from './reducers/blogReducer'
import { checkLocalStorage } from './reducers/userReducer'

import './index.css'

const App = (props) =>  {
  console.log('App')
  console.log(props)

  const { checkLocalStorage, initBlogs } = props
  useEffect(() => {
    console.log('useEffect')
    checkLocalStorage()
    initBlogs()
  }, [checkLocalStorage, initBlogs])


  return (
    <div>
      {props.user === null
        ?  <LoginForm />
        : <LoggedView />
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
  initBlogs,
  checkLocalStorage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
