import React, { useState } from 'react'

import { connect } from 'react-redux'

import { likeBlog, removeBlog } from '../reducers/blogReducer'

const Blog = props => {
  const [showAll, setShowAll] = useState(false)

  const divStyle = {
    backgroundColor: '#E0E0E0',
    padding: '1px 15px',
    margin: '10px 0',
  }

  const handleRemoveBlog = () => {
    const confirm = window.confirm(`Are you sure you want to remove "${props.blog.title}" by ${props.blog.author}?`)
    if (confirm ) {
      props.removeBlog(props.blog, props.user.token)
    }
  }

  return (
    <div>

      {showAll
        ?
        <div style={divStyle}>
          <h2 style={{ cursor: 'pointer' }} onClick={() => {
            setShowAll(!showAll)
          }}>
            {props.blog.title}
          </h2>
          <div>author: {props.blog.author}</div>
          <div>added by: {props.blog.user.name ? props.blog.user.name : props.blog.user.username}</div>
          <div>url: <a href={props.blog.url}>{props.blog.url}</a></div>
          <div>likes: {props.blog.likes}
            <button
              onClick={() => { props.likeBlog(props.blog) }}
            >like
            </button>
          </div>
          {props.user.id === props.blog.user.id
            ? <button onClick={handleRemoveBlog} >remove</button>
            : null
          }
        </div>
        :
        <div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowAll(!showAll)
            }}
          >
            <strong
              className="title"
            >{props.blog.title}</strong>, by {props.blog.author}
          </div>
        </div>
      }
    </div>
  )
}

const mapDispatchToProps = {
  likeBlog,
  removeBlog,
}

export default connect(
  null,
  mapDispatchToProps,
)(Blog)
