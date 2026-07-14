import React from 'react'

const Navbar = () => {
  return (
      <header  className="max-w-300 mx-auto h-22 flex items-center justify-between">

        <div className="text-[28px] font-extrabold">
            clear
            <span className="text-[28px] font-extrabold text-[#0b8a7d]">
                wave
            </span>
        </div>
    
        <div className="flex gap-12.5 text-[#3A5C58] ">
            <a href='#APP' className='hover:text-black cursor-pointer'>App</a>
            <a href='#Features' className='hover:text-black cursor-pointer'>Features</a>
            <a href='#Pricing' className='hover:text-black cursor-pointer'>Pricing</a>
            <a href='#Review' className='hover:text-black cursor-pointer'>Reviews</a>
            <a href='#FAQ' className='hover:text-black cursor-pointer'>FAQ</a>
        </div>
    
        <div className="flex items-center gap-1.25">
            <a href="#" className="no-underline border border-[rgba(4,9,9,0.08)]  rounded-full text-[#3A5C58] hover:border-2  py-3.75 px-7">
                Sign in
            </a>
    
            <button className="border-none bg-[#1A7A6E] text-white py-3.75 px-7 rounded-[40px] cursor-pointer hover:bg-black">
                Start Free Trial
            </button>
        </div>

      </header>
  )
}

export default Navbar