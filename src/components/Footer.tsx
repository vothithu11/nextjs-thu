import React from 'react';
import { inforContact } from '@/data/data';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full bg-[#003da5] padding-x py-8 mt-24 text-white ">
      {inforContact.map((value) => (
        <div key={value.id} className="space-y-2">
          <div className="font-bold">{value.title}</div>
          <div className="flex flex-col space-y-2">
            {value.subTitle.map((val, subIndex) => (
              <div key={subIndex}>{val.sub}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;



