import React from 'react'
import blogService from '../services/blogs'


import { useField } from '../hooks/hooks'


import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const CreateNewBlog = (props) => {
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [url, setUrl] = useState('')
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
    const b = await blogService.createBlog(props.user.token, newBlogObject)
    // setTitle('')
    // setAuthor('')
    // setUrl('')
    // title.reset()
    // author.reset()
    // url.reset()
    resetTitle()
    resetAuthor()
    resetUrl()
    props.addNewBlog(b)
    props.setNotification(`added: ${b.title}`, false, 10)
  }

  return <div>
    <form onSubmit={handleCreateBlog}>
      <h2>Create new blog</h2>
      <div>
        title:
        <input
          // value={title}
          // onChange={e => setTitle(e.target.value)}
          // type="text"
          {...title}
          name="title"
        />
      </div>
      <div>
        author
        <input
          // type="text"
          // value={author}
          // onChange={e => setAuthor(e.target.value)}
          {...author}
          name="author"
        />
      </div>
      <div>
        url
        <input
          // type="text"
          // value={url}
          // onChange={e => setUrl(e.target.value)}
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
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateNewBlog)
