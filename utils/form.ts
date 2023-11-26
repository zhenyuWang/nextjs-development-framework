import { RegisterOptions } from 'react-hook-form';

export const validationRules: Record<string, RegisterOptions> = {
  username: {
    required: 'Username is required',
    pattern: {
      value: /^\S+$/,
      message: 'Username should not contain spaces',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'The email is incorrect',
    },
  },
  password: {
    required: 'Password is required',
    pattern: {
      value: /^[^\s]{8,20}$/,
      message:
        'Please enter a password of 8 to 20 characters. Spaces are not allowed',
    },
  },
  verificationCode: {
    required: 'verification code is required',
    pattern: {
      value: /^\d{6}$/,
      message: 'The verification code is incorrect',
    },
  }
};
