'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Input,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Link,
} from '@nextui-org/react'
import { useState } from 'react'
import FormInput from '../../components/FormInput'

type Inputs = {
  email: string
  verificationCode: string
}

export default function ForgetPassword() {
  const [showPopover, setShowPopover] = useState(false)
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState(0)
  const [sendCodeButtonText, setSendCodeButtonText] = useState('Send code')
  const sendCode = () => {
    let count = 59
    setSendCodeButtonText(`${60}s`)
    const timer = setInterval(() => {
      if (count > 0) {
        count--
        setSendCodeButtonText(`${count}s`)
      } else {
        clearInterval(timer)
        setSendCodeButtonText('Send code')
      }
    }, 1000)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data)
    setEmail(data.email)
    setVerificationCode(data.verificationCode)
    setShowPopover(true)
    setTimeout(() => {
      setShowPopover(false)
    }, 2000)
  }

  return (
    <main className='w-100 h-screen flex flex-col items-center justify-center'>
      <div className='min-w-[300px] max-w-[360px] w-1/3 mt-[-100px]'>
        <h1 className='mb-8 text-3xl text-center font-bold'>Forget Password</h1>
        <form
          className='flex flex-col items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-full flex flex-col'>
            <FormInput
              label='Email'
              placeholder='please input your email'
              description='The email you used to register your account'
              register={register}
              name='email'
            />
            <span>{errors.email?.message}</span>
          </div>
          <div className='w-full mt-4 flex flex-col'>
            <FormInput
              label='Verification Code:'
              placeholder='verification code'
              description='Six-digit number'
              register={register}
              name='verificationCode'
              endContent={
                <button
                  className='focus:outline-none w-[110px] text-blue-500'
                  type='button'
                  disabled={sendCodeButtonText !== 'Send code'}
                  onClick={sendCode}
                >
                  {sendCodeButtonText}
                </button>
              }
            />
            <span>{errors.verificationCode?.message}</span>
          </div>
          <Popover placement='bottom' isOpen={showPopover} color='success'>
            <PopoverTrigger>
              <Button className='w-full mt-6' color='primary' type='submit'>
                Submit
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className='w-full px-6 py-2 text-white'>
                <div className='text-small font-bold'>
                  Form verification successful!
                </div>
                <div className='text-small'>Email: {email}</div>
                <div className='text-small'>
                  Verification Code: {verificationCode}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </form>
        <div className='mt-4'>
          <Link href='/sign-in'>Sign In</Link>
        </div>
      </div>
    </main>
  )
}
