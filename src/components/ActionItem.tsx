import React from 'react'
import CustomButton from './CustomButton';
import { ActionItemProps } from '@/data/type';

const ActionItem = ({image, title, content}: ActionItemProps) => {
  return (
    <div className='space-y-4'>
        <img src={image} className='mx-auto'/>
        <p className='text-center mx-auto pb-4'>{content}</p>
        <div className='flex items-center px-4'>
            <CustomButton title={title}/>
        </div>
    </div>
  )
}

export default ActionItem