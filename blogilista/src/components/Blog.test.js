import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

// afterEach(cleanup)

describe('testit', () => {
  let component
  const blog={
    title: 'Simple blog title',
    author: 'Sergei',
    likes: 0,
    url: 'google.com',
    user: {
      name: 'Sergei',
      username: 'sepi',
      id: '1',
    }
  }
  const user = {
    id: '1',
  }

  // const mockHandler = jest.fn()
  beforeEach(() => {
    component = render(
      <Blog
        blog={blog}
        handleLike={() => console.log('handleLike')}
        handleRemove={() => console.log('handleRemove')}
        user={user}
      />
    )
  })

  test('check that component contain only title and auhor when closed', () => {
    expect(component.container).toHaveTextContent(
      `${blog.title}, by ${blog.author}`
    )
    expect(component.container).not.toHaveTextContent(
      `author: ${blog.author}`
    )
    expect(component.container).not.toHaveTextContent(
      `url: ${blog.url}`
    )
    expect(component.container).not.toHaveTextContent(
      `likes: ${blog.likes}`
    )
  })

  test('check that component contain title, auhor, url and likes when open', () => {
    const titleElement = component.getByText(blog.title)
    fireEvent.click(titleElement)

    expect(component.container).toHaveTextContent(
      `${blog.title}`
    )
    expect(component.container).toHaveTextContent(
      `author: ${blog.author}`
    )
    expect(component.container).toHaveTextContent(
      `url: ${blog.url}`
    )
    expect(component.container).toHaveTextContent(
      `likes: ${blog.likes}`
    )
  })
})

