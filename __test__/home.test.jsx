import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {}
  },
}))

describe('Home', () => {
  it('render', () => {
    render(<Home />)

    expect(
      screen.getByRole('link', {
        name: 'Maybe Your Logo',
        href: '/',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: 'Sign In',
        href: '/sign-in',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: 'Sign Up',
        href: '/sign-up',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'avatar' })).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Nextjs development framework',
    )
  })
})
