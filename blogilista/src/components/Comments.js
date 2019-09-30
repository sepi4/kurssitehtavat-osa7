import React from 'react'
import { connect } from 'react-redux'

import { commentBlog } from '../reducers/blogReducer'

function Comments(props) {
  const blog = props.blog

  const handleCommentBlog = e => {
    e.preventDefault()
    const comment = e.target.comment.value
    props.commentBlog(blog, comment)
    e.target.comment.value = ''
  }

  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={handleCommentBlog}>
        <input type='text' name='comment' />
        <input type="submit" value="add comment" />
      </form>
      {blog.comments.length > 0
        ? <ul>
          {blog.comments.map(c => <li key={c}>{c}</li>)}
        </ul>
        :  null
      }
    </div>
  )
}

const mapDispatchToProps = {
  commentBlog,
}

export default connect(null, mapDispatchToProps)(Comments)
