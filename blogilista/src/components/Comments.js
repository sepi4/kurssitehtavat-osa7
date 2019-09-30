import React from 'react'
import { connect } from 'react-redux'

import { commentBlog } from '../reducers/blogReducer'

import {
  Form,
  Button,
  List,
  Segment,
} from 'semantic-ui-react'


function Comments(props) {
  const blog = props.blog

  const handleCommentBlog = e => {
    e.preventDefault()
    const comment = e.target.comment.value
    props.commentBlog(blog, comment)
    e.target.comment.value = ''
  }

  return (
    <Segment>
      <h3>comments</h3>
      <Form onSubmit={handleCommentBlog}>
        <Form.Field>
          <input type='text' floated='left' name='comment' />
        </Form.Field>
        <Form.Field>
          <Button type="submit" >add comment</Button>
        </Form.Field>
      </Form>
      {blog.comments.length > 0
        ? <List bulleted>
          {blog.comments.map(c => <List.Item key={c}>{c}</List.Item>)}
        </List>
        :  null
      }
    </Segment>
  )
}

const mapDispatchToProps = {
  commentBlog,
}

export default connect(null, mapDispatchToProps)(Comments)
