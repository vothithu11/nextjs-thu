import { images } from '@/data/data'
import React from 'react'

const SocialItem = ({image, title}) => {
  return (
    <div className='relative hover:scale-110 transition duration-700'>
        <img className="w-[375px] h-[375px] max-lg:w-[150px] max-lg:h-[150px] rounded-full opacity-80 hover:opacity-100" src={image} alt="image"/>
        <span className='absolute top-36 left-6 text-white text-center font-medium text-xl flex justify-center max-lg:hidden'>{title}</span>
    </div>
  )
}

export default SocialItem