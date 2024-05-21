"use client"
import React, { Component } from "react";
import { brandList } from "@/data/data";
import Brand from "@/app/brands/brand";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CustomButton from "@/components/CustomButton";

 export default function SwipeToSlide (){
  
  return (
    <div>
      <div className="text-center text-[#003da5] pb-36 font-extrabold">
      <p className="uppercase text-base py-6">CÁC NHÃN HÀNG CỦA CHÚNG TÔI</p>
      <h2 className="text-4xl">Các sản phẩm giúp cuộc sống dễ dàng hơn</h2>
      </div>
      <div className="pb-40">
        <Carousel>
        <CarouselContent>
        {brandList.map((brand, index) => (
                    <CarouselItem className="basis-1/5 px-2">  <Brand key={index} image={brand.image} title={brand.title} /></CarouselItem>
                  ))}
        </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center">
       <CustomButton title={"Xem các thương hiệu mang tính biểu tượng của chúng tôi"}/>
      </div>
    </div>
  );
}


