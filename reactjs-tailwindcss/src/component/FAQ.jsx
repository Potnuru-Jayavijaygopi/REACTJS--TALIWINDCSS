import React from 'react'

const FAQ = () => {
  return (
    <>
<section id='FAQ' className="py-2.5">
    <div className="w-[90%] mx-auto flex justify-between gap-15">
        <div className="w-[30%]">

            <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border border-[rgba(13,30,28,.08)] text-[10px] text-[#3A5C58]">

                <span className="w-2 h-2 rounded-full bg-[#1A7A6E]"></span>

                FAQ

            </div>

            <h2 className="text-[44px] text-[#0D1E1C] my-5 leading-none font-bold">
                Questions,<br/>
                <span className="text-[#1A7A6E] italic font-['Cormorant_Garamond']">
                    answered
                </span>
            </h2>

            <p className="text-[#3A5C58] leading-[1.9]">
                Can't find what you're looking for?
                Reach our team at hello@ClearWave.io - we reply within 2 hours.
            </p>

            <a href="#" className="inline-block mt-6.25 text-[#1A7A6E] no-underline">
                + Expand all
            </a>

        </div>
        <div className="flex-1">

            <div className="flex justify-between items-center py-5 border-b border-[rgba(13,30,28,.08)] text-[#0D1E1C] font-semibold text-[18px]">
                Is there a free trial?
                <span className="w-6.25 h-7.5 flex items-center justify-center rounded-full border border-[rgba(13,30,28,.08)] text-[#1A7A6E] text-[15px]">+</span>
            </div>

            <div className="flex justify-between items-center py-5 border-b border-[rgba(13,30,28,.08)] text-[#0D1E1C] font-semibold text-[18px]">
                How does pricing work for larger teams?
                <span className="w-6.25 h-7.5 flex items-center justify-center rounded-full border border-[rgba(13,30,28,.08)] text-[#1A7A6E] text-[15px]">+</span>
            </div>

            <div className="flex justify-between items-center py-5 border-b border-[rgba(13,30,28,.08)] text-[#0D1E1C] font-semibold text-[18px]">
                Can I migrate data from another tool?
                <span className="w-6.25 h-7.5 flex items-center justify-center rounded-full border border-[rgba(13,30,28,.08)] text-[#1A7A6E] text-[15px]">+</span>
            </div>

            <div className="flex justify-between items-center py-5 border-b border-[rgba(13,30,28,.08)] text-[#0D1E1C] font-semibold text-[18px]">
                What does the 99.9% uptime SLA mean?
                <span className="w-6.25 h-7.5 flex items-center justify-center rounded-full border border-[rgba(13,30,28,.08)] text-[#1A7A6E] text-[15px]">+</span>
            </div>

            <div className="flex justify-between items-center py-5 border-b border-[rgba(13,30,28,.08)] text-[#0D1E1C] font-semibold text-[18px]">
                Is my data secure?
                <span className="w-6.25 h-7.5 flex items-center justify-center rounded-full border border-[rgba(13,30,28,.08)] text-[#1A7A6E] text-[15px]">+</span>
            </div>

            <div className="flex justify-between items-center py-5 border-b border-[rgba(13,30,28,.08)] text-[#0D1E1C] font-semibold text-[18px]">
                Can I cancel anytime?
                <span className="w-6.25 h-7.5 flex items-center justify-center rounded-full border border-[rgba(13,30,28,.08)] text-[#1A7A6E] text-[15px]">+</span>
            </div>

        </div>

    </div>

</section>

<section className="py-8.75">

    <div className="w-[90%] mx-auto p-12.5 rounded-[36px] bg-[#031b18] flex justify-between items-center bg-[radial-gradient(circle_at_right,rgba(26,122,110,.35),transparent_40%)]">

        <div>

            <div className="inline-block px-2 py-1.75 border border-[rgba(255,255,255,.15)] rounded-full text-[#5BBFB5] mb-6.25 text-[15px] italic">
                ✦ GET STARTED TODAY
            </div>

            <h2 className="text-white text-[42px] leading-none font-bold">
                Ready for a<br/>
                <span className="text-[#5BBFB5] italic font-['Cormorant_Garamond']">
                    clearer workflow?
                </span>
            </h2>

            <p className="text-[#c7d8d5] mt-2.5">
                Join thousands of teams who replaced chaos with clarity.
            </p>

        </div>

        <div className="flex flex-col gap-2">

            <button className="w-[130%] h-12.5 rounded-full bg-[#1A7A6E] text-white border-none hover:bg-black">
                Start Free Trial ➝
            </button>

            <button className="w-[130%] h-12.5 rounded-full border border-[rgba(255,255,255,.15)] bg-transparent text-white hover:bg-black">
                Schedule a Demo
            </button>

        </div>

    </div>

</section>
    </>
  )
}

export default FAQ