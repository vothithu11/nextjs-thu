import Brand from "./brand";
import Hero from "@/sections/Hero";
import Image from 'next/image';
import { brandList, brandCatalogue } from "@/data/data";
import SlideBar from "./slideBar";
import Header from "@/components/header";

export default function Brands() {
    return (
        <div className="w-full h-screen ">
            <Header/>
            <img src="image/hero_1.png"/>
            <div className=" w-full grid grid-cols-2 gap-8 padding">
                <SlideBar brandCatalogue={brandCatalogue} />
                <div className="flex flex-col justify-between">
                {brandList.map((brand, index) => (
                    <div key={index} className="">
                        {brand.title}
                        {brand.children.map((value, i) => (
                            <Brand key={i} image={value.image} title={value.subTitle} />
                        ))}
                    </div>
                ))}

                </div>
            </div>
        </div>
    );
}