'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {SignedIn, SignedOut,SignInButton, UserButton} from '@clerk/nextjs';

const Nav = () => {
    
    const [toggleDropdown, setToggleDropdown] = useState(false)   

    

  return (
    <header className='relative w-full py-6'>
    <nav className='flex flex-row justify-between items-center '>
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
                <Link
                href='/about'
                ><li className='mx-10 p-2'>About</li></Link>
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
                <Link href='/about'><li className='mx-10 p-2'>About</li></Link>
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
                    <div 
                    className='cursor-pointer'
                    onClick={()=>{setToggleDropdown((prev)=> !prev)}}>    
                    {toggleDropdown ?
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                                
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )
                    }
                    </div>
                        <UserButton afterSignOutUrl='/'/>
                        {toggleDropdown && (
                            <div className='dropdown z-50'>
                                <Link
                                href="/"
                                className='dropdown_link '
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                href="/about"
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    About
                                </Link>
                                <Link
                                href="/contact"
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    Contact
                                </Link>
                                <Link
                                href="/dashboard"
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    Dashboard
                                </Link>
                            </div>
                        )}
                    </div>
                
                </>
                </SignedIn>
             <SignedOut>
               <>
               <div className='flex gap-2'>
               <div className='cursor-pointer '
               onClick={()=>{setToggleDropdown((prev)=> !prev)}}>    
                    {toggleDropdown ?
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>        
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )
                    }
                </div>
                {toggleDropdown && (
                            <div className='dropdown shadow'>
                                <Link
                                href="/"
                                className='dropdown_link '
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                href="/about"
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    About
                                </Link>
                                <Link
                                href="/contact"
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                                >
                                    Contact
                                </Link>
                                
                            </div>
                        )}    
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
