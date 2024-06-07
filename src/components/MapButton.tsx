import React from 'react'
import styles from "@/app/styles";
const MapButton = ({title,svg}) => {
  return (
         <div className="relative max-lg:hidden">
          <div className='absolute'>
            {svg}
          </div>
          <span className={`${styles.btnColor} pl-10 text-sm pt-0.5`}>{title}</span>
          <input className={`${styles.btn} w-[120px] px-2 h-8 bg-transparent border-[#204075] border-2`} />
        </div>
  )
}

export default MapButton