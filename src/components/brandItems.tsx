import React from 'react'
import Brand from './Brand';
import { BrandItemsProps } from '@/data/type';
const BrandItems = ({title, index, children}:BrandItemsProps) => {
  return (
    <div key={index} className="m-10 p-8 relative flex flex-row max-lg:-ml-24 max-md:grid max-md:grid-cols-1 max-md:p-2 max-md:justify-items-center max-md:m-2">
                        <h2 className="absolute top-0 left-2 text-4xl text-[#204075] font-bold max-lg:xl max-lg:padding-y max-md:mb-8">{title}</h2>
                        {children.map((value, i) => (
                            <div className="relative top-6 left-0 py-4 px-10 max-lg:space-x-6 ">
                            <Brand key={i} image={value.image} title={value.subTitle} />
                            <p className="grid justify-items-center mt-2 text-md text-[#204075] font-medium max-md:-my-12 ">{value.content}</p>
                            </div>
                        ))}
    </div>
  )
}

export default BrandItems