'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, Fragment, useRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {SignedIn, SignedOut,SignInButton, UserButton} from '@clerk/nextjs';

const Nav = () => {
    
    const [toggleDropdown, setToggleDropdown] = useState(false)   

    

  return (
    <header className='relative w-full '>
    <nav className='flex flex-row justify-between py-6 items-center z-100'>
        <Link href='/' className='flex justify-center items-center gap-2'>
            <Image 
                src='/assets/img/logo.png'
                alt='Shipping Logo'
                width={200}
                height={200}
                className='rounded-full'
                priority={true} 
            />
            <p className='logo_text'></p>
        </Link>
        
        {/*Desktop Nav */}
        <div className='sm:flex hidden'>
            <SignedIn>
                <>
                <ul className='hidden lg:flex '>
                <Link
                href='/'
                ><li className='mx-10 p-2'>Home</li></Link>    
                
                <Link href='/contact'><li className='mx-10 p-2'>Contact</li></Link>
                <Link href='/dashboard'><li className='mx-10 p-2'>Dashboard</li></Link>
                </ul>
                <div className='flex gap-3 md:gap-5'>
                    <UserButton afterSignOutUrl='/' />
                </div>
                </>
            </SignedIn>
            <SignedOut>
               <>
                <ul className='hidden lg:flex '>
                <Link href='/'><li className='mx-10 p-2'>Home</li></Link>
                <Link href='/contact'><li className='mx-10 p-2'>Contact</li></Link>
                </ul>
                <div className='flex gap-3 md:gap-3'>
                <SignInButton mode='modal'>    
                    <button
                        type='button' 
                        className='outline_btn'
                    >
                         Sign In
                    </button>
                </SignInButton>        
                </div>
               </>     
            </SignedOut>

            
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative '>
            <SignedIn>
                <>
                <div className='flex gap-2'>
                <Menu as="div">
                    <div>    
                        <Menu.Button>    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    > 
                <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                <Menu.Item>
                <Link
                href="/"
                className='dropdown_link '>
                Home
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link
                href="/contact"
                className='dropdown_link '>
                Contact
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link
                href="/dashboard"
                className='dropdown_link '>
                Dashboard
                </Link>
                </Menu.Item>
                </div>
                </Menu.Items>
                </Transition>
                </Menu>
                <UserButton afterSignOutUrl='/'/>
                </div>
                </>
                </SignedIn>
             <SignedOut>
               <>
               <div className='flex gap-2'>
               <Menu as="div">
                    <div>    
                        <Menu.Button>    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    > 
                <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                <Menu.Item>
                <Link
                href="/"
                className='dropdown_link '>
                Home
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link
                href="/contact"
                className='dropdown_link '>
                Contact
                </Link>
                </Menu.Item>
                </div>
                </Menu.Items>
                </Transition>
                </Menu>
               <SignInButton mode='modal'>
               <button
                    type='button'
                    className='outline_btn'
                >
                Sign In
                </button>
                </SignInButton>
                </div>
               </>     
            </SignedOut>

            
        </div>    

    </nav>
    </header>
  )
}
 

export default Nav
