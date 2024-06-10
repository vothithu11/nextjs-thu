"use client";
import styles from "@/app/styles"; // Ensure this path is correct
import Image from 'next/image'; // Import statement for Image, although not used in this code
import { navigationLabel } from "@/data/data"; // Correct import name
import MapButton from "./MapButton";
import NavItem from "./NavItem";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "@/data/motion";
import { useState } from "react";

export default function Header() {
  const [firstItem, secondItem, ...restItems] = navigationLabel;
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <motion.div 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="fixed padding-x py-2 z-10 w-full h-[67px] bg-slate-50 drop-shadow-xl"
    >
      <div className='flex justify-between items-center max-container'>
        <MapButton title={"Việt Nam"} svg={<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`${styles.btnColor} top-4 w-8 h-8 inset-0 pl-1`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>} />
        <ul className="flex-1 flex justify-center items-center gap-2 text-base text-[#204075] font-semibold">
          <NavItem {...firstItem} />
          <NavItem {...secondItem} />
          <li className="relative top-8 group h-full w-[100px]">
            <Link href="/">
              <img src="/image/logo.png" alt="description" className="w-12 h-12 rounded-full object-cover" />
            </Link>
          </li>
          {restItems.length > 0 && <NavItem {...restItems[0]} />}
        </ul>      
        <div className="flex max-lg:hidden">
        <MapButton svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${styles.btnColor} top-4 left-12 w-6 h-6 inset-0 justify-items-center`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        }/>
        </div>
        <div className="hidden max-lg:block">
          <button className="" onClick={toggleNavbar}>
            {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>):(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>)}
          </button>
          {isOpen && ( 
          <ul className="absolute top-[80px] left-0 w-full bg-slate-100 p-4 rounded-lg shadow-lg">
          {navigationLabel.map((value) => (
            <li key={value.id} className="group relative h-full w-full">
              <Link href={value.subTitle[0].url}>
                <div className="block w-full h-full p-2 text-center rounded-md hover:bg-white transition duration-200">
                  <span>{value.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>)}
        </div>
        
      </div>
    </motion.div >
  );
}
