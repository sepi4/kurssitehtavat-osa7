import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = (props) => {

  const usersTable = () => {
    if (props.blogs.length === 0) {
      return null
    }

    const usersObj = props.blogs.reduce((pre, cur) => {
      if (pre[cur.user.id]) {
        pre[cur.user.id].blogs += 1
      }
      else {
        pre[cur.user.id] = cur.user
        pre[cur.user.id].blogs = 1
      }
      return pre
    }, {})

    const users = Object.keys(usersObj)
      .map(key => usersObj[key] )
      .sort((a, b) => b.blogs - a.blogs)

    return (
      <table>

        <thead>
          <tr>
            <th></th>
            <th>blogs</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u =>
            <tr key={u.id}>
              <td><Link to={`/users/${u.id}`}>{u.name ? u.name : u.username}</Link></td>
              <td>{u.blogs}</td>
            </tr>
          )}
        </tbody>

      </table>
    )
  }
  return (
    <div>
      <h2>Users</h2>
      {usersTable()}
    </div>
  )
}


export default connect(
  (state) => {
    return {
      blogs: state.blogs,
    }
  },
  null,
)(Users)
