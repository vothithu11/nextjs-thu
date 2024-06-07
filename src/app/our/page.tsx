"use client"
import ActionItem from '@/components/ActionItem';
import Header from '@/components/Header';
import Social from '@/sections/Social';
import React from 'react';
import { ourAction } from '@/data/data';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/data/motion";

const Our = () => {
  const staggerVariants = staggerContainer(0.5, 0.2);
  return (
   <div className='w-full h-screen'>
      <Header/>
      <div className='relative'>
      <img src='/image/our_3.png' alt='img' className='image-style'/>
      <img src='/image/books.png' alt='img' className='w-14 h-14 rounded-full bg-slate-50 absolute top-[59%] left-[50%] z=10'/>
      </div>
      <motion.div 
       variants={staggerVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.5 }}
       className='text-center text-[#003da5] -mt-64 mb-32 max-lg:mt-0'>
        <h1 className='text-6xl font-extrabold max-lg:text-2xl'>Chúng tôi là ai</h1>
        <h4 className='text-4xl font-extrabold pt-24 max-lg:text-2xl'>Biến mỗi ngày trở nên phi thường</h4>
        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='pt-8 font-light items-center px-80 text-[#000] text-base max-lg:hidden'
        >Thương hiệu của chúng tôi được tin tưởng trong hàng triệu phòng khách, nhà bếp, phòng giặt và phòng tắm và đã được truyền từ thế hệ này sang thế hệ khác. Trong suốt 181 năm, chúng đã thách thức các tập quán, dẫn dắt đổi mới và giúp định hình văn hóa. <br/>
        Nhưng cho dù tăng trưởng bao nhiêu, chúng tôi luôn duy trì một nền tảng sâu sắc trong các <span className='text-[#003da5] underline font-semibold'>mục đích, giá trị và nguyên tắc.</span> Chúng tôi đã theo đuổi các giá trị này hơn 66.000 ngày và sẽ không dừng lại.
        </motion.p>
      <motion.div
        variants={fadeIn('up','tween', 0.5, 1.5)} 
        className='w-96 h-96 mx-auto rounded-full bg-[#003da5] flex items-center justify-center mb-32 mt-24 max-lg:w-72 max-lg:h-72'>
        <p className='px-4 text-center text-white text-2xl font-semibold max-lg:text-xl'>Chúng tôi tin tưởng vào việc tìm ra những cách nhỏ nhưng có ý nghĩa để cải thiện cuộc sống — hiện tại và cho những thế hệ mai sau.</p>
      </motion.div>
      </motion.div>
      <div className='text-center text-[#003da5] -mt-24 mb-32 '>
        <h4 className='text-4xl font-extrabold pt-24 max-lg:text-2xl pb-8'>Chúng tôi làm gì</h4>
        <div className='grid grid-cols-2 justify-items-center mx-auto w-[30%] max-lg:w-[70%]'>
        {ourAction.map((value)=>(
          <ActionItem content={value.content} image={value.image} title={value.title}/>
        ))}
        </div>
      </div>
      <h4 className='text-4xl font-extrabold pt-12 pb-20 max-lg:text-2xl px-24 text-[#003da5] max-lg:-mt-12'>Tìm hiểu về chúng tôi</h4>
      <Social/>
      <Footer/>
   </div>
  )
}

export default Our