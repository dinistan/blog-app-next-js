import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        <Image src={assets.logo} width={120} alt='' />
      </div>
      
    </div>
  )
}

export default Sidebar
