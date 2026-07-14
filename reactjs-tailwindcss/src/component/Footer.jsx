import React from 'react'

const Footer = () => {
  return (
    <>
   <footer class="bg-[#031b18] py-25 pb-10">

  <div class="w-275 mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] gap-12.5">
    <div>

      <h3 class="text-white text-[30px] font-bold">
        clear<span class="text-[#5BBFB5]">wave</span>
      </h3>

      <p class="mt-2.5 text-[#8aa4a0] leading-6">
        The calm, powerful workspace for <br/>
        teams that want to focus on work - <br/>
        not on managing it.
      </p>

      <div class="flex gap-3 mt-5">

        <a href="#" class="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,.12)] rounded-[14px] text-white text-[20px] font-semibold bg-transparent hover:bg-[#1A7A6E] transition-all duration-300">
          X
        </a>

        <a href="#" class="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,.12)] rounded-[14px] text-white text-[20px] font-semibold bg-transparent hover:bg-[#1A7A6E] transition-all duration-300">
          in
        </a>

        <a href="#" class="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,.12)] rounded-[14px] text-white text-[20px] font-semibold bg-transparent hover:bg-[#1A7A6E] transition-all duration-300">
          ▶
        </a>

        <a href="#" class="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,.12)] rounded-[14px] text-white text-[20px] font-semibold bg-transparent hover:bg-[#1A7A6E] transition-all duration-300">
          ♪
        </a>

      </div>

    </div>
    <div>

      <h4 class="text-[#1A7A6E] font-semibold">
        PRODUCT
      </h4>

      <div class="flex flex-col mt-2.5 gap-2.5">

        <a href="#" class="text-[#8aa4a0] hover:text-white">Features</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Mobile App</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Pricing</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Integrations</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Changelog</a>

      </div>

    </div>
    <div>

      <h4 class="text-[#1A7A6E] font-semibold">
        COMPANY
      </h4>

      <div class="flex flex-col mt-2.5 gap-2.5">

        <a href="#" class="text-[#8aa4a0] hover:text-white">About</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Blog</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Careers</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Press Kit</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Status</a>

      </div>

    </div>
    <div>

      <h4 class="text-[#1A7A6E] font-semibold">
        SUPPORT
      </h4>

      <div class="flex flex-col mt-2.5 gap-2.5">

        <a href="#" class="text-[#8aa4a0] hover:text-white">Help Center</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Documentation</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Security</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Contact</a>
        <a href="#" class="text-[#8aa4a0] hover:text-white">Community</a>

      </div>

    </div>

  </div>

 <div class="w-275 mx-auto mt-15 pt-7.5 border-t border-[rgba(255,255,255,.08)] flex justify-between items-center">

    <div class="text-[#28bea5]">
        © 2026 Clearwave. Design by
        <span class="text-[#3A5C58]">TemplateMo</span>
    </div>

    <div class="flex gap-6">

        <a href="#" class="text-[#8aa4a0] text-[10px] hover:text-white transition-all duration-300">
            Privacy Policy
        </a>

        <a href="#" class="text-[#8aa4a0] text-[10px] hover:text-white transition-all duration-300">
            Terms of Service
        </a>

        <a href="#" class="text-[#8aa4a0] text-[10px] hover:text-white transition-all duration-300">
            Cookie Policy
        </a>

    </div>

 </div>

</footer>
    </>
  )
}

export default Footer