"use client"
import Hero from "@/sections/Hero";
import Image from 'next/image';
import { brandList } from "@/data/data";
import SlideBar from "@/components/slideBar";
import Header from "@/components/Header";
import BrandItems from "@/components/BrandItems";
import { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/data/motion";
import { BrandListProps } from "@/data/type";

const Brands= () =>{
    const [items, setItems] = useState<BrandListProps[]>([])
    const staggerVariants = staggerContainer(0.5, 0.2);
    return (
        <div className="w-full h-screen ">
            <Header/>
            <motion.div 
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="relative">
            <img src="image/hero_4.png" className="image-style-ver2 opacity-90"/>
            <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="absolute z-2 top-44 left-44 text-8xl text-[#FFF5EE] opacity-100 font-semibold shadow-text max-lg:text-4xl max-md:left-20 max-md:top-24">Các nhãn hiệu.</motion.h1>
            <motion.p 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="absolute z-2 top-80 text-left w-[30%] left-44 text-lg text-white opacity-100 font-normal shadow-text bg-transparent bg-opacity-50 max-lg:text-base max-lg:top-60 max-lg:w-[60%] max-md:hidden">P&G mang đến những thương hiệu uy tín, chất lượng hàng đầu, với hiệu quả và giá trị vượt trội để đáp ứng nhu cầu làm sạch, giữ gìn sức khỏe và đảm bảo vệ sinh của người tiêu dùng trên toàn thế giới.</motion.p>
            </motion.div >
            <div className=" grid grid-cols-3 padding -mb-12">
                <div className="px-4">
                <SlideBar getSearchResults={(results: BrandListProps[]) => setItems(results)}/>
                </div>
                <div className="w-full col-span-2 -ml-20">
                {items.length > 0 ? (
                        items.map((brand, index) => (
                            <BrandItems key={brand.id} title={brand.title} children={brand.children} />
                        ))
                    ) : (
                        brandList.map((brand, index) => (
                            <BrandItems key={brand.id} title={brand.title} children={brand.children} />
                        ))
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Brands