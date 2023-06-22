import React from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'


const Header = () => {
  return (
    <header className='bg-gray-800 py-4 px-8'>
      <h1 className='text-3xl text-white font-bold mb-4 flex justify-center content-center'>User Directory</h1>

      <SearchBar />
      <FilterBar />
    </header>
  )
}

export default Header