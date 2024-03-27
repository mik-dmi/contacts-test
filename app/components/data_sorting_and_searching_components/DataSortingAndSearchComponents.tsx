'use client'
import React from 'react'
import FilterByCountryAccordion from './FilterByCountryAccordion'
import SearchBar from './SearchBar'
import SortAccordion from './SortAccordion'
import CountryTag from './CountryTag'


export default function DataSortingAndSearchComponents() {
  return (
    <div className='flex-col  w-full'>
      <div className='flex justify-between pb-8'>
        <div className='flex gap-6'>
          <FilterByCountryAccordion/>
          <span className = 'text-md underline self-center cursor-pointer' onClick={() => console.log("Clear")}>Clear</span>
        </div>
        <div className='flex'>
            <SearchBar/>
            <SortAccordion/>
        </div>
      </div>
      <div className='bg-gray-300 w-full h-20 flex px-6 justify-left items-center	' >
          <span>Showing X results of Y items</span>
          <span className='text-3xl px-6'>|</span>
          <div>
            <span>Filtering by: </span>
            <CountryTag nameOfCountry = "Portugal"/>
          </div>
      </div>
    </div>
  )
}
