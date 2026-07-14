import React from 'react'

const Pricing = () => {
  return (
    <section id='Pricing' className="py-5">

    <div className="text-center mb-7.5">

        <div className="inline-flex items-center gap-2.5 px-5.5 py-2.5 rounded-full border border-[rgba(13,30,28,.08)] bg-[#D9ECEA]">

            <span className="w-2.5 h-2.5 rounded-full bg-[#1A7A6E]"></span>

            <span className="text-[#1A7A6E] text-[12px] tracking-[2px] font-semibold">
                PRICING
            </span>

        </div>

        <h2 className="mt-2.5 text-[38px] text-[#0D1E1C] font-bold">
            Simple, <span className="text-[#1A7A6E] italic font-['Cormorant_Garamond']">
                transparent
            </span> pricing
        </h2>

        <p className="mt-2.5 text-[#3A5C58] text-[15px]">
            No hidden fees. No surprise overages. Cancel anytime.
        </p>

        <div className="mt-6.25 flex justify-center items-center gap-3.5 text-[14px]">

            <span className="text-[#2A9D8F]">Monthly</span>

            <div className="relative w-10 h-5 rounded-full bg-[#1A7A6E]">

                <div className="absolute top-[2.5px] left-0.75 w-3.75 h-3.75 rounded-full bg-white"></div>

            </div>

            <nav>Annual</nav>

            <div className="px-3.5 py-1.5 rounded-full bg-[rgba(26,122,110,.08)] text-[#3A5C58] text-[10px]">
                Save 35%
            </div>

        </div>

    </div>

    <div className="w-[80%] mx-auto grid grid-cols-3 gap-5">

        <div className="bg-white border border-[rgba(13,30,28,.08)] rounded-4xl p-6.25">

            <span className="text-[#6B8C88] text-[13px] tracking-[2px]">
                STARTER
            </span>

            <h3 className="text-[64px] my-3.75 font-bold">
                <span className="text-[25px]">$</span>20
                <small className="text-[20px]">/mo</small>
            </h3>

            <p className="text-[#3A5C58] leading-[1.8] mb-2.5">
                For individuals and small teams getting started with structured workflows.
            </p>

            <ul className="list-none mb-7.5 space-y-2.5">

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Up to 5 team members
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    10 active dashboards
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Basic automations (50/mo)
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    7-day data history
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Email support
                </li>

            </ul>

            <button className="w-full h-14.5 rounded-full border border-[rgba(13,30,28,.08)] bg-white text-[#1A7A6E] font-semibold hover:bg-black hover:text-white">
                Start Free Trial
            </button>

        </div>

        <div className="relative bg-[#041f1b] text-white border border-[rgba(13,30,28,.08)] rounded-4xl p-6.25">

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A7A6E] text-white px-4.5 py-2 rounded-full text-[12px] tracking-[1px]">
                MOST POPULAR
            </div>

            <span className="text-[#a8c9c4] text-[13px] tracking-[2px]">
                PROFESSIONAL
            </span>

            <h3 className="text-[64px] my-3.75 font-bold">
                <span className="text-[25px]">$</span>60
                <small className="text-[20px]">/mo</small>
            </h3>

            <p className="text-[#d5e5e1] leading-[1.8] mb-2.5">
                For growing teams that need powerful automation and advanced reporting.
            </p>

            <ul className="list-none mb-7.5 space-y-2.5">

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Up to 25 team members
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Unlimited dashboards
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Advanced automations
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    90-day data history
                </li>

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">
                    Priority support
                </li>

            </ul>

            <button className="w-full h-14.5 rounded-full bg-[#1A7A6E] text-white font-semibold border-none hover:bg-black
            ">
                Start Free Trial
            </button>

        </div>

        <div className="bg-white border border-[rgba(13,30,28,.08)] rounded-4xl p-6.25">

            <span className="text-[#6B8C88] text-[13px] tracking-[2px]">
                ENTERPRISE
            </span>

            <h3 className="text-[64px] my-3.75 font-bold">
                <span className="text-[25px]">$</span>150
                <small className="text-[20px]">/mo</small>
            </h3>

            <p className="text-[#3A5C58] leading-[1.8] mb-2.5">
                For large organizations with custom requirements and compliance needs.
            </p>

            <ul className="list-none mb-7.5 space-y-2.5">

                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">Unlimited members</li>
                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">Custom integration & API</li>
                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">SSO & advanced permissions</li>
                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">Unlimited data history</li>
                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">Dedicated success manager</li>
                <li className="before:content-['✓'] before:text-[#1A7A6E] before:font-bold before:mr-2">SOC 2 & compliance report</li>

            </ul>

            <button className="w-full h-14.5 rounded-full border border-[rgba(13,30,28,.08)] bg-white text-[#1A7A6E] font-semibold hover:bg-black  hover:text-white">
                Contact Sales
            </button>

        </div>

    </div>

</section>
  )
}

export default Pricing