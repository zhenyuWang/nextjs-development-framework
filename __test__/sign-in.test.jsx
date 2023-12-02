import { render, screen } from '@testing-library/react'
import SignIn from '../app/sign-in/page'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {}
  },
}))

describe('SignIn', () => {
  beforeEach(() => {
    render(<SignIn />)
  })
  it('render', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Sign In')

    expect(screen.getByText('Spaces not allowed')).toBeInTheDocument()

    expect(screen.getByText('8~20 non-space characters')).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: 'Sign Up',
        href: '/sign-up',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: 'Forget Password',
        href: '/forget-password',
      }),
    ).toBeInTheDocument()
  })
  it('validation form', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    expect(screen.getByText('Username is required')).toBeInTheDocument()

    const usernameInput = screen.getByPlaceholderText(
      'please input your username',
    )
    await userEvent.type(usernameInput, ' ')
    expect(
      screen.getByText('Username should not contain spaces'),
    ).toBeInTheDocument()

    await userEvent.clear(usernameInput)
    await userEvent.type(usernameInput, 'username')
    expect(screen.getByText('Password is required')).toBeInTheDocument()

    const passwordInput = screen.getByPlaceholderText(
      'please input your password',
    )
    expect(passwordInput).toHaveAttribute('type', 'password')

    const togglePasswordInputTypeButton = screen.getByTestId(
      'toggle-password-input-type-sign-in',
    )
    await userEvent.click(togglePasswordInputTypeButton)
    expect(passwordInput).toHaveAttribute('type', 'text')

    await userEvent.type(passwordInput, '123')
    expect(
      screen.getByText(
        'Please enter a password of 8 to 20 characters. Spaces are not allowed',
      ),
    ).toBeInTheDocument()

    await userEvent.type(passwordInput, '45678')
    await userEvent.click(submitButton)
    expect(
      screen.getByText('Form verification successful!'),
    ).toBeInTheDocument()
    expect(screen.getByText('Username: username')).toBeInTheDocument()
    expect(screen.getByText('Password: 12345678')).toBeInTheDocument()
  })
})
