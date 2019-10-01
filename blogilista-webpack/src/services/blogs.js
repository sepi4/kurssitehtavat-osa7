import axios from 'axios'
// const baseUrl = '/api/blogs'
const baseUrl = `${BACKEND_URL}/api/blogs`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlog = async (token, newObject) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const commentBlog = async (blog, comment) => {
  const newObject = {
    comment,
  }
  const response = await axios.post(`${baseUrl}/${blog.id}/comments`, newObject)
  return response.data
}

const likeBlog = async blog => {
  const blogObjToUpdate = {
    _id: blog.id,
    user: blog.user.id,
    likes: blog.likes + 1,
    author: blog.author,
    title: blog.title,
    url: blog.url,
  }
  const response = await axios.put(`${baseUrl}/${blog.id}`, blogObjToUpdate)
  response.data.user = blog.user
  return response.data
}

const removeBlog = async (blog, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }
  const url = `${baseUrl}/${blog.id}`
  const response = await axios.delete(url, config)
  return response.data
}

export default { getAll, createBlog, likeBlog, removeBlog, commentBlog }
