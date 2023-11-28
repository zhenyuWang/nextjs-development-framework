import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('render', () => {
    render(<Home />)
    const img = screen.getByRole('img', { name: 'avatar' })
    expect(img).toBeInTheDocument()
    const heading = screen.getByRole('heading', {
      name: 'Nextjs development framework',
    })
    expect(heading).toBeInTheDocument()
  })
})
