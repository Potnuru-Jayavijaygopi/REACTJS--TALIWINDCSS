import React from 'react'

const Navbar = () => {
  return (
      <header className="max-w-300 mx-auto h-22 flex items-center justify-between">

        <div className="text-[28px] font-extrabold">
            clear
            <span className="text-[28px] font-extrabold text-[#0b8a7d]">
                wave
            </span>
        </div>
    
        <div className="flex gap-12.5 text-[#3A5C58]">
            <nav>App</nav>
            <nav>Features</nav>
            <nav>Pricing</nav>
            <nav>Reviews</nav>
            <nav>FAQ</nav>
        </div>
    
        <div className="flex items-center gap-6.25">
            <a href="#" className="no-underline text-[#3A5C58]">
                Sign in
            </a>
    
            <button className="border-none bg-[#1A7A6E] text-white py-3.75 px-7 rounded-[40px] cursor-pointer">
                Start Free Trial
            </button>
        </div>

      </header>
  )
}

export default Navbar