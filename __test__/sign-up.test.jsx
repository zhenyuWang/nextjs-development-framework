import { render, screen } from '@testing-library/react'
import SignUp from '../app/sign-up/page'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SignUp', () => {
  beforeEach(() => {
    render(<SignUp />)
  })
  it('render', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Sign Up')

    expect(
      screen.getByText('The email you used to register your account'),
    ).toBeInTheDocument()

    expect(screen.getByText('8~20 non-space characters')).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: 'Sign In',
        href: '/sign-in',
      }),
    ).toBeInTheDocument()
  })
  it('validation form', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    expect(screen.getByText('Email is required')).toBeInTheDocument()

    const emailInput = screen.getByPlaceholderText('please input your email')
    await userEvent.type(emailInput, 'test')
    expect(screen.getByText('The email is incorrect')).toBeInTheDocument()

    await userEvent.type(emailInput, '@test.com')
    expect(screen.getByText('Password is required')).toBeInTheDocument()

    const passwordInput = screen.getByPlaceholderText(
      'please input your password',
    )
    expect(passwordInput).toHaveAttribute('type', 'password')

    const togglePasswordInputTypeButton = screen.getByTestId(
      'toggle-password-input-type-sign-up',
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
    expect(screen.getByText('Email: test@test.com')).toBeInTheDocument()
    expect(screen.getByText('Password: 12345678')).toBeInTheDocument()
  })
})
