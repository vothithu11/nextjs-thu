// NavItem.jsx
import React from 'react';
import Link from 'next/link';

const NavItem = ({ id, title, subTitle }) => {
  return (
    <li className="relative group h-full w-[250px] max-lg:hidden" key={id}>
      <Link href="" className="flex flex-row ">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </Link>
      <ul className="absolute left-0 pt-2 space-y-2 w-full rounded-xl hidden bg-white shadow-lg transition duration-5000 group-hover:block hover:block">
        {subTitle.map((value, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-200 w-full font-normal">
            <Link href={value.url}>
              {value.sub}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
