import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

import B from './services/__mocks__/blogs'

describe('<App />', () => {
  test('if user is not logged in, login page is open and blogs are not rendered', async () => {
    let component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('login')
    )
    expect(component.container).toHaveTextContent('username')
    expect(component.container).toHaveTextContent('password')
    expect(component.container).toHaveTextContent('log in')

    expect(component.container).not.toHaveTextContent('Blogs')
    expect(component.container).not.toHaveTextContent('logout')
    expect(component.container).not.toHaveTextContent('new blog')

  })

  test('logged user', async () => {
    const user = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0aW5hIiwiaWQiOiI1ZDg2NjRlOWE2MTVlOTZjY2JkNDhiMWYiLCJpYXQiOjE1NjkzNjgxODJ9.THnDzhsv3qYMs-St7ONLZiJNB4sYw-fGJkmuU_UcbqE',
      username: 'stina',
      name: 'Stina Palomaki',
      id:'5d8664e9a615e96ccbd48b1f',
    }
    localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

    let component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('Blogs')
    )
    expect(component.container).toHaveTextContent('logged in')

    const titles = component.container.querySelectorAll('.title')
    expect(titles.length).toBe(B.blogs.length)
  })
})
