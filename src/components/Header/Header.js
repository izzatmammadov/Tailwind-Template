import React from 'react'
import tattoo_bg from "../../assets/images/tattoo_bg.jpg"
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
  return (
    <header className="h-screen relative">
      <Navbar/>
        <div className="h-screen"><img className="h-screen w-screen filter blur-sm" src={tattoo_bg}/></div>
        <section>
            <div className="absolute top-36 flex flex-col gap-5 left-40 z-10 border-8 border-opacity-50 p-5 text-white border-solid border-main w-5/12">
                <h1 className="text-xxl font-bold">Full Service <span className="bg-main font-thin">TATTOO</span> Shop</h1>
                <p className='text-xs font-thin mb-4'>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.</p>
                <button className="bg-main p-3 text-s font-bold hover:bg-white hover:text-main transition-all duration-500">BOOK AN APPOINTMENT</button>
            </div>
        </section>
    </header>
  )
}
