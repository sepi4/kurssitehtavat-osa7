import React from 'react'
import { connect } from 'react-redux'


const Users = (props) => {

  const usersTable = () => {
    if (props.blogs.length === 0) {
      return null
    }

    const usersObj = props.blogs.reduce((pre, cur) => {
      if (pre[cur.user.name] || pre[cur.user.username]) {
        cur.user.name ? pre[cur.user.name] += 1 : pre[cur.user.username] += 1
      }
      else {
        cur.user.name ? pre[cur.user.name] = 1 : pre[cur.user.username] = 1
      }
      return pre
    }, {})

    const users = Object.keys(usersObj).map(key => {
      return {
        name: key,
        blogs: usersObj[key],
      }
    }).sort((a, b) => b.blogs - a.blogs)

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
            <tr key={u.name}>
              <td>{u.name}</td>
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
