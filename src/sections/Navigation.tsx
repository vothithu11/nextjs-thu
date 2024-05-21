
import { navigationlist } from "@/data/data";

const Navigation = () => {
  return (
    <div>
      <ul className="fixed top-1/3 right-0 z-10">
        {navigationlist.map((nav, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="pr-8 bg-slate-50 rounded-full py-1 px-2 my-2 text-[#204075] font-semibold ">{nav.title}</span>
            <a className="absolute right-0 w-5 h-5 rounded-full border-2 border-[#204075] after:content-[''] active:bg-[#204075] hover:bg-[#204075]">
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
