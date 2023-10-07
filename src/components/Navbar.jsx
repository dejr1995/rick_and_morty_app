import React from 'react'
import { BsSearch, BsGenderMale, BsGenderFemale } from 'react-icons/bs';

const Navbar = ({ brand, filter, handleFilterChange, selectMale, selectFemale, reset}) => {
  return (
    <nav className="bg-gray-800 h-[70px] flex justify-between">
      <div className="flex items-center ml-10">
        <a className="text-white text-2xl" href="/">{brand}</a>
      </div>
      <div className='flex items-center mr-10 gap-8'>
      <div className='flex items-center gap-3'>
      <BsSearch size={18} color='white'/>
      <input
        type="text"
        placeholder="Search name"
        value={filter}
        onChange={handleFilterChange}
        onClick={reset}
      />
      </div>
      
      <div className="flex gap-2">
        <BsGenderMale size={25} color='skyblue' className='cursor-pointer' onClick={selectMale} />
        <BsGenderFemale size={25} color='pink' className='cursor-pointer' onClick={selectFemale}/>
      </div>
      </div>
    </nav>
  )
}

export default Navbar