import CustomButton2 from "@/components/CustomButton2";

export default function Brand({image, title}) {
    return (
        <button className="transition duration-300 ease-in-out transform hover:scale-125 rounded-lg p-8 max-lg:p-2 max-lg:hover:scale-110 max-lg:padding-y max-lg:my-12">
            <div className="relative h-48 w-48 max-lg:h-28 max-lg:w-28 overflow-hidden mx-auto rounded-full shadow-lg">
                    <img src={`${image}`} className="object-cover h-full w-full" alt="Logo" />
                    <a className="absolute inset-0 z-10 bg-[#204075] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-95 bg-opacity-100 duration-300">
                    <h1 className="tracking-wider p-2 text-[#FFFAFA] text-2xl max-lg:text-base font-bold">{title}</h1>
                    {/* <button className="mx-auto bg-white rounded-full p-2 border-2 text-lg hover:bg-[#204075] hover:border-[#FFFAFA]-300 ">Đến trang</button> */}
                    <CustomButton2 title={"Đến trang"}/>
                    </a>
            </div>
        </button>
    );
}