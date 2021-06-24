import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Post from './pages/Post'

test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory()
  const route = '/post'
  history.push(route)
  render(
    <Router history={history}>
      <Post />
    </Router>
  )
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})