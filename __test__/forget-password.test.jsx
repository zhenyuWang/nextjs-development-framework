import { render, screen } from '@testing-library/react'
import ForgetPassword from '../app/forget-password/page'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('SignUp', () => {
  beforeEach(() => {
    render(<ForgetPassword />)
  })
  it('render', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Forget Password')

    expect(
      screen.getByText('The email you used to register your account'),
    ).toBeInTheDocument()

    expect(screen.getByText('Six-digit number')).toBeInTheDocument()

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
    expect(
      screen.getByText('verification code is required'),
    ).toBeInTheDocument()

    const passwordInput = screen.getByPlaceholderText('verification code')
    await userEvent.type(passwordInput, '123')
    expect(
      screen.getByText('The verification code is incorrect'),
    ).toBeInTheDocument()

    await userEvent.type(passwordInput, '456')
    await userEvent.click(submitButton)
    expect(
      screen.getByText('Form verification successful!'),
    ).toBeInTheDocument()
    expect(screen.getByText('Email: test@test.com')).toBeInTheDocument()
    expect(screen.getByText('Verification Code: 123456')).toBeInTheDocument()
  })
  it('send verification code', async () => {
    const button = screen.getByRole('button', { name: 'Send code' })
    await userEvent.click(button)

    jest.useFakeTimers()
    jest.advanceTimersByTime(100)
    expect(button).toHaveTextContent('60s')
  })
})
