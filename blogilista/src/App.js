import React, { useEffect } from 'react'

import LoginForm from './components/LoginForm'
import LoggedView from './components/LoggedView'

import { connect } from 'react-redux'

import { initBlogs } from './reducers/blogReducer'
import { checkLocalStorage } from './reducers/userReducer'

import { Container } from 'semantic-ui-react'

import './index.css'

const App = (props) =>  {

  const { checkLocalStorage, initBlogs } = props
  useEffect(() => {
    checkLocalStorage()
    initBlogs()
  }, [checkLocalStorage, initBlogs])


  return (
    <Container>
      <div>
        {props.user === null
          ?  <LoginForm />
          : <LoggedView />
        }
      </div>
    </Container>
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
