"use client"
import React from "react";
import { brandList } from "@/data/data";
import Brand from "@/components/Brand";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomButton from "@/components/CustomButton";
import { BrandListProps } from "@/data/type";

const SwipeToSlide = () => {
  const getChildrenArray = (brandList: BrandListProps[]) => {
    return brandList.flatMap(brand => brand.children);
  };

  const childrenArray = getChildrenArray(brandList);
  return (
    <div className="max-lg:pt-80 max-md:pt-44" id="brands">
      <div className="text-center text-[#003da5] pb-36 font-extrabold max-lg:pb-12">
        <p className="uppercase text-base max-lg:text-sm py-6">CÁC NHÃN HÀNG CỦA CHÚNG TÔI</p>
        <h2 className="text-4xl max-lg:text-2xl">Các sản phẩm giúp cuộc sống dễ dàng hơn</h2>
      </div>
      <div className="pb-40 max-lg:pb-0">
        <Carousel>
          <CarouselContent>
            {childrenArray.map((child, index) => (
              <CarouselItem className="basis-1/5 px-2 max-lg:pl-12 max-lg:pr-24" key={index}>
                <Brand image={child.image} title={child.subTitle} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center">
        <CustomButton title={"Xem các thương hiệu mang tính biểu tượng của chúng tôi"} />
      </div>
    </div>
  );
};

export default SwipeToSlide;



