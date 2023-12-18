import React from 'react'
import price from "../../assets/images/prices.jpg"

export const Prices = () => {
  return (
    <section className='h-screen relative flex justify-center items-center text-white'>
        <h3 className='absolute z-10 top-10 text-xl font-bold text-center'>Our Pricing</h3>
        <div className="h-screen"><img className="h-screen w-screen filter grayscale "src={price}/></div>
    <section className='absolute top-36 flex flex-wrap w-full items-center justify-center gap-6'>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Minimalist</p>
            <p className='italic'>$35+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Hand</p>
            <p className='italic'>$50+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Forearm</p>
            <p className='italic'>$100+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Full Arm</p>
            <p className='italic'>$300+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Back</p>
            <p className='italic'>$420+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Ankle</p>
            <p className='italic'>$85+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Head</p>
            <p className='italic'>$250+</p>
        </div>

        <div className='flex items-center justify-between w-[40%] p-8 border-4 border-main cursor-pointer text-m hover:transform hover:scale-105 transition-all duration-500 backdrop-blur-md'>
            <p className='font-semibold'>Full Body</p>
            <p className='italic'>$7500+</p>
        </div>
       

    </section>
    </section>
  )
}
