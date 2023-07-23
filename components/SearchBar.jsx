import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div className='space-x-6'>
                <form action="" className='w-full max-w-md'>
                <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <input  
                  type='search ' 
                  name='Tracking number' 
                  placeholder='Search Tracking No.'
                  className='w-full p-4 rounded-full bg-slate-200 '
                  />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4
                rounded-full bg-slate-800'>  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
                  </div>
                </form>
        </div>
    </div>
  )
}

export default SearchBar
