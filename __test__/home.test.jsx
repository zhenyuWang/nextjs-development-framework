import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('render', () => {
    render(<Home />)

    expect(screen.getByRole('img', { name: 'avatar' })).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Nextjs development framework',
    )
  })
})
