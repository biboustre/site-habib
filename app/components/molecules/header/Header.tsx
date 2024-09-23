import React from 'react'
import LogoMain from '../../atoms/logo/LogoMain'
import NavHeader from '../../atoms/navHeader/NavHeader'

export default function Header() {
  return (
    <header className='flex justify-between items-center px-10 py-12 shadow-md h-[80px] fixed w-full bg-blue-200'>
        <LogoMain />
        <NavHeader /> 
    </header>
  )
}
