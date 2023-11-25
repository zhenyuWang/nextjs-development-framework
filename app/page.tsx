import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-14'>
      <Image
        className='rounded-[50%]'
        src='/images/avatar.png'
        alt='avatar'
        width={100}
        height={100}
        priority={true}
      />
      <h1 className='mt-6 text-lg text-white'>Nextjs development framework</h1>
    </main>
  )
}
