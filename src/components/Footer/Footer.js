import React from 'react'

export const Footer = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10 py-10'>
        <h4 className='text-center text-xl font-bold'>Contact Us</h4>
        <form className=' w-[40%]'>
            <div class="mb-4">
                <label for="username" class="block text-s font-medium mb-1">Fullname:</label>
                <input type="text" class="shadow-md border-8 border-main border-opacity-50  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"/>
            </div>

            <div class="mb-4">
                <label for="username" class="block text-s font-medium mb-1">E-Mail:</label>
                <input type="e-mail" class=" shadow-md border-8 border-main border-opacity-50 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"/>
            </div>

            <div class="mb-4">
                <label for="username" class="block text-s font-medium mb-1">Message:</label>
                <textarea type="text" class="shadow-md border-8 border-main border-opacity-50  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"/>
            </div>
            <button className='shadow-md bg-main p-3 text-s font-bold border-4 border-main border-opacity-50 hover:bg-white hover:text-main transition-all duration-500 w-full' >SEND</button>
        </form>
    </section>
  )
}
