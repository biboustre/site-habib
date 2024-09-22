import React from 'react'
import LogoMain from '../../atoms/logo/LogoMain'
import NavHeader from '../../atoms/navHeader/NavHeader'

export default function Header() {
  return (
    <header className='flex justify-between items-center px-10 shadow-md h-[80px]'>
        <LogoMain />
        <NavHeader /> 
    </header>
  )
}
