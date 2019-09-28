import React, { useState } from 'react'
const Blog = ({ blog, handleLike, handleRemove, user }) => {
  const [showAll, setShowAll] = useState(false)

  const divStyle = {
    backgroundColor: '#E0E0E0',
    padding: '1px 15px',
    margin: '10px 0',
  }
  return (
    <div>

      {showAll
        ?
        <div style={divStyle}>
          <h2 style={{ cursor: 'pointer' }} onClick={() => {
            setShowAll(!showAll)
          }}>
            {blog.title}
          </h2>
          <div>author: {blog.author}</div>
          <div>added by: {blog.user.name ? blog.user.name : blog.user.username}</div>
          <div>url: <a href={blog.url}>{blog.url}</a></div>
          <div>likes: {blog.likes}
            <button
              onClick={() => { handleLike(blog) }}
            >
                  like
            </button>
          </div>
          {user.id === blog.user.id
            ? <button onClick={() => handleRemove(blog)}>remove</button>
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
            >{blog.title}</strong>, by {blog.author}
          </div>
        </div>
      }
    </div>
  )
}

export default Blog
