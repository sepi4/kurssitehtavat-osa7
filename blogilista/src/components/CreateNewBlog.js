import React from 'react'

import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { addBlog } from '../reducers/blogReducer'

import {
  Form,
  Button,
} from 'semantic-ui-react'

const CreateNewBlog = (props) => {

  const handleCreateBlog = async e => {
    e.preventDefault()
    const newBlogObject = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    }

    if (!newBlogObject.title || newBlogObject.title.length === 0) {
      return
    }

    props.addBlog(newBlogObject, props.user)
    props.setNotification(`added: ${newBlogObject.title}`, false, 10)

    e.target.title.value = ''
    e.target.author.value = ''
    e.target.url.value = ''
  }

  return <div>
    <Form onSubmit={handleCreateBlog}>
      <h2>create new blog</h2>
      <Form.Field>
        <label>title</label>
        <input name="title" />
      </Form.Field>
      <Form.Field>
        <label>author</label>
        <input name="author" />
      </Form.Field>
      <Form.Field>
        <label>url</label>
        <input name="url" />
      </Form.Field>
      <Form.Field>
        <Button primary type="submit">create</Button>
      </Form.Field>
    </Form>
  </div>
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setNotification,
  addBlog,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateNewBlog)
