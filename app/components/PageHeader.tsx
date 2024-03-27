'use client'
import React from 'react'

export default function PageHeader() {
  return (
    <div className='flex justify-between max-w-[1200px] mx-auto my-4'>
        <h1 className=' font-bold text-4xl'>Contact List</h1>
        <span className = 'text-md underline self-center cursor-pointer' onClick={() => console.log("reset")}>Reset All</span>
    </div>
  )
}
