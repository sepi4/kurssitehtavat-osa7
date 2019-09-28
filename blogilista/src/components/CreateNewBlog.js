import React from 'react'

import { useField } from '../hooks/hooks'

import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { addBlog } from '../reducers/blogReducer'

const CreateNewBlog = (props) => {
  const [ title, resetTitle ] = useField('text')
  const [ author, resetAuthor ] = useField('text')
  const [ url, resetUrl] = useField('text')

  const handleCreateBlog = async e => {
    e.preventDefault()
    const newBlogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
    }
    props.addBlog(newBlogObject, props.user)
    props.setNotification(`added: ${newBlogObject.title}`, false, 10)
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  return <div>
    <form onSubmit={handleCreateBlog}>
      <h2>Create new blog</h2>
      <div>
        title:
        <input
          {...title}
          name="title"
        />
      </div>
      <div>
        author
        <input
          {...author}
          name="author"
        />
      </div>
      <div>
        url
        <input
          {...url}
          name="url"
        />
      </div>
      <div>
        <input type="submit" value="create" />
      </div>
    </form>

  </div>
}

const mapDispatchToProps = {
  setNotification,
  addBlog,
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateNewBlog)
