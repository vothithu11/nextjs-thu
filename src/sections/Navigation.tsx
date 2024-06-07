"use client";
import { Link } from "react-scroll";
import { navigationlist } from "@/data/data";

const Navigation = () => {
  return (
    <div>
      <ul className="fixed top-1/3 right-0 z-10">
        {navigationlist.map((nav, index) => (
          <li key={index} className="relative group my-4 max-md:my-0.5">
            <Link
              activeClass="active"
              to={nav.section}
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              className="flex items-center space-x-2"
            >
              <span className="bg-slate-50 rounded-full drop-shadow-xl py-1.5 pl-4 pr-8 text-[#204075] font-semibold hidden group-first:inline-block group-hover:inline-block absolute right-0 -z-2 whitespace-nowrap max-md:py-0.5">
                {nav.title}
              </span>
              <a className="w-5 h-5 z-10 m-2 rounded-full border-2 border-[#204075] group-hover:bg-[#204075]"></a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;


