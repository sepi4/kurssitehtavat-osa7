import React from 'react'

import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { addBlog } from '../reducers/blogReducer'

const CreateNewBlog = (props) => {

  const handleCreateBlog = async e => {
    e.preventDefault()
    const newBlogObject = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    }

    props.addBlog(newBlogObject, props.user)
    props.setNotification(`added: ${newBlogObject.title}`, false, 10)

    e.target.title.value = ''
    e.target.author.value = ''
    e.target.url.value = ''
  }

  return <div>
    <form onSubmit={handleCreateBlog}>
      <h2>Create new blog</h2>
      <div>
        title <input name="title" />
      </div>
      <div>
        author <input name="author" />
      </div>
      <div>
        url <input name="url" />
      </div>
      <div>
        <input type="submit" value="create" />
      </div>
    </form>

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
