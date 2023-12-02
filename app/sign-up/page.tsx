'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Link,
} from '@nextui-org/react'
import FormInput from '../../components/Form/FormInput'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

type Inputs = {
  email: string
  password: string
}

export default function SignUp() {
  const router = useRouter()
  const [showPopover, setShowPopover] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data)
    setEmail(data.email)
    setPassword(data.password)
    setShowPopover(true)
    setTimeout(() => {
      setShowPopover(false)
      router.replace('/sign-in')
    }, 2000)
  }

  return (
    <main className='w-100 h-screen flex flex-col items-center justify-center'>
      <div className='min-w-[300px] max-w-[360px] w-1/3 mt-[-100px]'>
        <h1 className='mb-8 text-3xl text-center font-bold'>Sign Up</h1>
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
              label='Password'
              placeholder='please input your password'
              description='8~20 non-space characters'
              register={register}
              name='password'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  data-testid='toggle-password-input-type-sign-up'
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <AiFillEye className='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <AiFillEyeInvisible className='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
            />
            <span>{errors.password?.message}</span>
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
                <div className='text-small'>Password: {password}</div>
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
