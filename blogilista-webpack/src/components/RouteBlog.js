import React from 'react'
import { connect } from 'react-redux'


const RouteBlog = (props) => {
}


export default connect(
  (state) => {
    return {
      blogs: state.blogs,
    }
  },
  null,
)(RouteBlog)
