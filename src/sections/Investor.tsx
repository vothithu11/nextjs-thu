import Image from "next/image";
import { investor } from "@/data/data";
import CustomButton from "@/components/CustomButton";
const Investor = () => {
  return (
    <div className="grid grid-cols-2 space-x-4 ml-24">
       {investor.map((investor) => (
      <div className="relative max-h-full w-full overflow-hidden mx-auto" key={investor.id}>
     <img className="rounded-3xl h-[570px] w-[550px] hover:scale-110 transition duration-700" src={investor.image} alt="Investor" />
      <a className="absolute bottom-0 left-0 z-10 h-1/3 w-3/4 space-y-4 pl-8 rounded-tr-2xl text-xl text-custom bg-white text-center flex flex-col items-start justify-center opacity-0 hover:opacity-95 bg-opacity-100 duration-300 delay-150">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
        <span className="">{investor.title}</span>
        <CustomButton title={investor.button}/>
      </a>
      </div>
      ))}
    </div>
  );
}

export default Investor
