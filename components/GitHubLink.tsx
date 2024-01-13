'use client'

import { useTheme } from '@/context/theme-context'
import { Link } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa'

export default function ThemeSwitch() {
  const themeContext = useTheme()
  const theme = themeContext?.theme

  return (
    <Link
      href='https://github.com/zhenyuWang/nextjs-development-framework'
      isExternal
      className='fixed top-4 right-14 z-50 shadow-2xl hover:scale-[1.15] active:scale-105 transition-all'
    >
      <FaGithub size={26} color={theme === 'light' ? '#000' : '#fff'} />
    </Link>
  )
}
