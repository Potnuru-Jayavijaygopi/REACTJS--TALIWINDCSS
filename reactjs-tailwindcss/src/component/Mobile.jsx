import React from 'react'

const Mobile = () => {
  return (
   <section id='APP' className="text-center py-15 px-5">

    <div className="inline-flex items-center gap-2.5 px-6 py-2.5 border border-[#5BBFB5] rounded-[30px] bg-[#a5eee7] text-[#0a8a7a] text-[14px] font-bold tracking-[2px] font-serif">

        <span className="w-2.5 h-2.5 bg-[#0a8a7a] rounded-full"></span>

        MOBILE APP

    </div>

    <h2 className="text-[64px] leading-none mt-2.5 font-semibold text-[#0D1E1C]">
        Your workspace,<br/>

        <span className="text-[#1A7A6E] italic font-['Cormorant_Garamond']">
            in your pocket
        </span>
    </h2>

    <p className="max-w-150 mx-auto mt-6.25 text-[#3A5C58] leading-[1.8]">
        The Clearwave mobile app brings every dashboard,
        task and notification to you — beautifully adapted
        for any screen.
    </p>

    <div className="flex justify-center items-center gap-5 mt-2.5">

        <button className="w-7.5 h-7.5 rounded-full border border-[#e0eeed] bg-white text-[20px] text-[#0a8a7a] cursor-pointer">
            −
        </button>

        <div className="flex gap-1.25">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dbe7e6]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#dbe7e6]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0a8a7a]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#dbe7e6]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#dbe7e6]"></span>
        </div>

        <button className="w-7.5 h-7.5 rounded-full border border-[#dcebea] bg-white text-[20px] text-[#0a8a7a] shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer">
            +
        </button>

    </div>

    <div className="h-95 max-w-250 mx-auto my-10 rounded-[30px] bg-[#EEF7F5] border border-dashed border-[#d7ece8]"></div>

    <div className="flex justify-center items-center gap-5">

        <button className="w-10.5 h-10.5 rounded-full border border-[rgba(13,30,28,0.08)] bg-white">
            ‹
        </button>

        <div className="flex gap-2">

            <span className="w-2 h-2 rounded-full bg-[#d3dfdd]"></span>
            <span className="w-2 h-2 rounded-full bg-[#d3dfdd]"></span>
            <span className="w-5.5 h-2 rounded-[20px] bg-[#1A7A6E]"></span>
            <span className="w-2 h-2 rounded-full bg-[#d3dfdd]"></span>
            <span className="w-2 h-2 rounded-full bg-[#d3dfdd]"></span>

        </div>

        <button className="w-10.5 h-10.5 rounded-full border border-[rgba(13,30,28,0.08)] bg-white">
            ›
        </button>

    </div>

   </section>
  )
}

export default Mobile