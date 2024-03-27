import React from 'react'
function CountryTag({ nameOfCountry }: { nameOfCountry: string }) {
    return (
      <div className=' font-semibold'>
        <span className='bg-violet-600 rounded-sm px-2 py-[0.2rem] text-white'>country : {nameOfCountry}   <span className='text-gray-400 text-l cursor-pointer'>X</span></span>
      </div>
    );
  }
  
  export default CountryTag;
