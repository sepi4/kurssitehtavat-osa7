import blogService from '../services/blogs'

export const initBlogs = () => {
  return dispatch => {
    blogService.getAll()
      .then(initialBlogs => {
        dispatch({
          type: 'INIT_BLOGS',
          data: initialBlogs,
        })
      })
  }
}

export const addBlog = (blog, user) => {
  return async dispatch => {
    const newBlog = await blogService.createBlog(user.token, blog)
    dispatch({
      type: 'ADD',
      data: {
        ...newBlog,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
        },
      },
    })
  }
}

export const likeBlog = blog => {
  return async dispatch => {
    const updatedBlog = await blogService.likeBlog(blog)
    dispatch({
      type: 'LIKE',
      data: updatedBlog,
    })
  }
}

export const removeBlog = (blog, token) => {
  return async dispatch => {
    await blogService.removeBlog(blog, token)
    dispatch({
      type: 'REMOVE',
      data: blog,
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'ADD':
      return [
        ...state,
        {
          ...action.data,
        }
      ]
    case 'LIKE':
      return state.map(b => {
        if (b.id === action.data.id) {
          return {
            ...b,
            likes: b.likes + 1,
          }
        }
        return b
      })
    case 'REMOVE':
      return state.filter(b => b.id !== action.data.id)
    default:
      return state
  }
}

export default reducer
