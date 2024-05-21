import React from 'react'
import { inforContact } from '@/data/data'

const Footer = () => {
  return (
    <div className="grid grid-cols-4 w-full">
        {inforContact.map((value, index) => (
          <div className='grid grid-cols-1'>
            <div key={index}>{value.title}</div>
            <ul>
            {value.subTitle.map((val)=>(
              <li>{val.sub}</li>
            ))}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Footer

