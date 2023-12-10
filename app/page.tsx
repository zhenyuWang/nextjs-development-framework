import NavBar from '../components/NavBar/NavBar'
import { Image } from '@nextui-org/react'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <NavBar />
      <Image
        className='rounded-[50%] mt-60'
        src='/images/avatar.png'
        alt='avatar'
        width={100}
        height={100}
      />
      <h1 className='mt-6 text-lg text-black dark:text-white'>
        Nextjs development framework
      </h1>
    </main>
  )
}
