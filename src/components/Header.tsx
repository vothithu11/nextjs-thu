"use client";
import styles from "@/app/styles";
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationLable } from "@/data/data";
import MapButton from "./MapButton";

export default function Header() {
  return (
    <div className="fixed padding-x py-8 z-10 w-full h-10 flex justify-around bg-slate-50 drop-shadow-xl">
      <div className='flex justify-between items-center max-container space-x-20'>
        <MapButton title={"Việt Nam"}/>
        <NavigationMenu>
          <NavigationMenuList>
          {navigationLable.map((label) => (
            <NavigationMenuItem key={label.id}>
          <NavigationMenuTrigger>{label.type?label.title:"img"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {label.subTitle.map((value) => (
                <li>{value.sub}</li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
              ))}

          </NavigationMenuList>
        </NavigationMenu>
        {/* <nav>
      {navigationLable.map((item) => (
        <div key={item.id} className="navigation-menu-item">
          <button className="navigation-menu-trigger">
            {item.title}
          </button>
          <div className="navigation-menu-content">
            <ul className="menu-list">
              {Object.entries(item.subTitle).map(([key, value]) => (
                <li key={key} className="menu-list-item">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </nav> */}
        {/* Uncomment and use Image component if needed */}
        {/* <Image src="/public/image/logo.png" width={20} height={20} alt="logo" /> */}
        <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className={`${styles.btnColor} w-8 h-8 inset-0 justify-items-center`}>
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
          <input className={`${styles.btn} w-[120px] px-2 h-8 bg-transparent border-[#204075] border-2`} />
        </div> 
      </div>
    </div>
  );
}
