'use client'
import { useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from '@nextui-org/react'
import { AiOutlineLogout } from 'react-icons/ai'

const NavBar = () => {
  type UserInfo = { username: string; password: string }
  const [userInfo, setUserInfo] = useState({} as UserInfo)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userInfoStr = localStorage.getItem('userInfo')
      if (userInfoStr) {
        setUserInfo(JSON.parse(userInfoStr) as UserInfo)
      }
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('userInfo')
    setUserInfo({} as UserInfo)
  }

  return (
    <Navbar className='bg-sky-400 dark:bg-sky-500'>
      <NavbarBrand>
        <Link href='/' className='h-16 text-black dark:text-white'>
          Maybe Your Logo
        </Link>
      </NavbarBrand>
      <NavbarContent justify='end' className='pr-8'>
        {userInfo.username ? (
          <NavbarItem>
            <Dropdown placement='bottom' className='min-w-[130px] w-[130px'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  className='transition-transform'
                  color='primary'
                  name='Running Snail'
                  size='sm'
                  src='/images/avatar.png'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownSection showDivider>
                  <DropdownItem
                    key='username'
                    color='default'
                    className='text-black dark:text-white'
                    isDisabled
                  >
                    {userInfo.username}
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem
                  key='logout'
                  className='text-sky-500'
                  color='primary'
                  startContent={<AiOutlineLogout className='text-xl' />}
                  onClick={logout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem>
              <Link href='/sign-in' className='text-black dark:text-white'>
                Sign In
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                className='text-black dark:text-white'
                color='primary'
                href='/sign-up'
                variant='bordered'
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar
