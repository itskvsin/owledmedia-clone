'use client'
 
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Hero from './components/sections/Hero'
import Brands from './components/sections/Brands'
 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div className='border-l border-r border-gray-500 ml-10 mr-10 '>
     <Hero />
     <Brands />
    </div>
  )
}