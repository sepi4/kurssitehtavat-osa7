import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

// afterEach(cleanup)

describe('testit', () => {
  let component
  const blog={
    title: 'Simple blog title',
    author: 'Sergei',
    likes: 0,
  }
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <SimpleBlog
        blog={blog}
        onClick={mockHandler}
      />
    )
  })

  test('component render: title, author, likes', () => {
    expect(component.container).toHaveTextContent(
      `${blog.title} ${blog.author}`
    )
    expect(component.container).toHaveTextContent(
      `blog has ${blog.likes} likes`
    )
  })

  test('if like button press 2 times, callback is called 2 times', () => {
    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(mockHandler.mock.calls.length).toBe(2)
  })

})

