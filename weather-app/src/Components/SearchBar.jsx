import React from 'react'
import { useEffect,useRef } from 'react'

const SearchBar = ({handleSearchValue, searchResults, onOutsideClick, handleSearchResultClick}) => {

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div className='w-full relative'>
      <div className='relative bg-gray-600 m-4 w-full rounded-xl flex items-center'>
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input className='rounded-xl p-2 ps-10 w-full border-none focus:ring-blue-500' 
              type="text" 
              placeholder='Search for Cities' onKeyDown={(e)=>handleSearchValue(e)}/>
      </div>
      {searchResults && (
        <div ref={divRef} className='w-full h-32 mx-4 absolute -bottom-34 rounded-xl overflow-auto z-50'>
            {Object.entries(searchResults).map((r,index)=>(
              <div className='h-12 w-full bg-gray-600 grid grid-cols-4 gap-4 items-center p-2 hover:bg-gray-500 cursor-pointer' onClick={()=>handleSearchResultClick(r[1].name,r[1].lat,r[1].lon)}>
                <div className='col-span-2 flex flex-col justify-center items-start mr-2'>
                  <h1 className='text-lg ml-4'>{r[1].name}</h1>
                  <p className='text-xs ml-4 text-gray-400 truncate text-ellipsis w-full'>{r[1].display_name}</p>
                </div>
                <p className='text-gray-400'>{r[1].lat}</p>
                <p className='text-gray-400'>{r[1].lon}</p>
              </div>
            ))}
        </div>
      )}
      
    </div>
    
    
  )
}

export default SearchBar