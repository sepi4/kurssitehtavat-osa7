import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { likeBlog, removeBlog } from '../reducers/blogReducer'

import {
  Button,
  Icon,
  Table,
} from 'semantic-ui-react'


const BlogContent = (props) => {
  const blog = props.blog

  const handleRemoveBlog = () => {
    const confirm = window.confirm(`Are you sure you want to remove "${blog.title}" by ${blog.author}?`)
    if (confirm ) {
      props.removeBlog(blog, props.user.token)
      props.history.push('/')
    }
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <Table definition>
        <Table.Body>

          <Table.Row>
            <Table.Cell>author:</Table.Cell>
            <Table.Cell>{blog.author}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>added by:</Table.Cell>
            <Table.Cell>{blog.user.name ? blog.user.name : blog.user.username}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>url: </Table.Cell>
            <Table.Cell><a href={'//'+blog.url}>{blog.url}</a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>likes:</Table.Cell>
            <Table.Cell> {blog.likes}
              <Button floated='right' onClick={() => { props.likeBlog(blog) }} color='red' size='mini'>
                <Icon name='heart' /> like
              </Button>
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
      {
        props.user.id === blog.user.id
          ? <Button onClick={handleRemoveBlog} color='black' >remove blog</Button>
          : null
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
  likeBlog,
  removeBlog,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(BlogContent)
