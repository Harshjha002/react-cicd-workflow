import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('renders heading', () => {
  render(<App />)

  expect(screen.getByText(/get started/i)).toBeInTheDocument()
})

test('button increments count', () => {
  render(<App />)

  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(button).toHaveTextContent('Count is 1')
})