'use client'

import { useTheme } from '@/context/theme-context'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function ThemeSwitch() {
  const themeContext = useTheme()
  const theme = themeContext?.theme
  const toggleTheme = themeContext?.toggleTheme

  return (
    <button
      className='fixed top-4 right-4 z-50 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all'
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <MdLightMode size={26} color='#000' />
      ) : (
        <MdDarkMode size={26} color='#fff' />
      )}
    </button>
  )
}
