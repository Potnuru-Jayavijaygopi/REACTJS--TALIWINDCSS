import React from 'react'

const Graph = () => {
  return (
   <>
  <section className="max-w-300 mx-auto min-h-[85vh] flex items-center justify-between">

    <div className="w-[48%]">

        <div className="w-[60%] flex items-center gap-2.5 px-4.5 py-3 bg-white border border-[rgba(13,30,28,0.08)] rounded-[30px] mb-5">

            <div className="w-5 h-5 bg-[#00897b] rounded-full flex items-center justify-center text-white text-[15px] font-bold">
                ✦
            </div>

            <div>
                Rated
                <span className="text-[#00897b]"> #1 Productivity SaaS </span>
                of 2024
            </div>

        </div>

        <h1 className="text-[58px] leading-[0.95] font-semibold">
            Your workflow,<br/>
            <span className="text-[#1A7A6E] italic font-['Cormorant_Garamond']">
                finally clear.
            </span>
        </h1>

        <p className="mt-6.25 text-[20px] leading-[1.8] text-[#3A5C58]">
            Clearwave unifies your team's projects,
            data and communication into one calm,
            focused surface. Less noise, more done.
        </p>

        <div className="mt-8.75 flex gap-5">

            <button className="bg-[#1A7A6E] text-white px-10.5 py-3.75 rounded-full hover:bg-mist-950  cursor-pointer">
                Start Free — No Card
                <span className="text-[15px] leading-none">→</span>
            </button>

            <button className="bg-[#D9ECEA] text-[#1A7A6E] border border-[rgba(13,30,28,0.08)] px-10.5 py-4.5 rounded-full hover:border-2 cursor-pointer">
                ▶ See it in action
            </button>
        </div> 

        <div className="mt-10 flex gap-6.25 text-[#6B8C88] text-[14px]">

            <span>🛡 SOC 2 Certified</span>

            <span>⚡ 99.9% Uptime SLA</span>

            <span>👥 50k+ Teams</span>

        </div>

    </div>
    <div className="w-[46%]">
      <div className="relative bg-white p-8.75 rounded-[28px] border border-[rgba(13,30,28,0.08)] ">

            <div className="flex gap-2 mb-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
            </div>

            <h3 className="mb-7.5 text-lg font-semibold">
                Team Performance
            </h3>

            <div className="h-42.5 flex items-end gap-3">

                <div className="w-11.25 h-8.75 rounded-t-[10px] bg-[#E8F3F1]"></div>

                <div className="w-11.25 h-13.75 rounded-t-[10px] bg-[#D7ECE8]"></div>

                <div className="w-11.25 h-8.75 rounded-t-[10px] bg-[#E8F3F1]"></div>

                <div className="w-11.25 h-23.75 rounded-t-[10px] bg-linear-to-t from-[#1A7A6E] to-[#5BBFB5]"></div>

                <div className="w-11.25 h-13.75 rounded-t-[10px] bg-[#D7ECE8]"></div>

                <div className="w-11.25 h-30 rounded-t-[10px] bg-linear-to-t from-[#1A7A6E] to-[#5BBFB5]"></div>

                <div className="w-11.25 h-13.75 rounded-t-[10px] bg-[#D7ECE8]"></div>

                <div className="w-11.25 h-33.75 rounded-t-[10px] bg-linear-to-t from-[#1A7A6E] to-[#5BBFB5]"></div>

            </div>

            <div className="flex gap-3 mt-6.25">

                <div className="flex-1 bg-[#F5FBFA] p-4.5 rounded-[18px]">
                    <h2 className="mb-1.5 text-2xl font-bold">94%</h2>
                    <p className="text-[#6B8C88] text-[14px]">Task Rate</p>
                    <span className="block mt-2.5 text-[#0b8a7d] text-[15px]">+12%</span>
                </div>

                <div className="flex-1 bg-[#F5FBFA] p-4.5 rounded-[18px]">
                    <h2 className="mb-1.5 text-2xl font-bold">2.4k</h2>
                    <p className="text-[#6B8C88] text-[14px]">Active Users</p>
                    <span className="block mt-2.5 text-[#0b8a7d] text-[15px]">+8%</span>
                </div>

                <div className="flex-1 bg-[#F5FBFA] p-4.5 rounded-[18px]">
                    <h2 className="mb-1.5 text-2xl font-bold">18h</h2>
                    <p className="text-[#6B8C88] text-[14px]">Saved / week</p>
                    <span className="block mt-2.5 text-[#0b8a7d] text-[15px]">+24%</span>
                </div>

            </div>

            <div className="absolute -left-15 -bottom-7.5 flex items-center gap-3 bg-white border border-[rgba(13,30,28,0.08)] rounded-[18px] p-3.75">

                <div className="w-13.75 h-13.75 rounded-xl bg-[#1A7A6E] flex items-center justify-center text-white text-[18px]">
                    ✦
                </div>

                <div>
                    <strong>New Integration</strong>
                    <p className="text-[#6B8C88] text-[13px]">
                        Slack connected · just now
                    </p>
                </div>

            </div>

            <div className="absolute top-6.25 -right-6.25 bg-[#1A7A6E] text-white px-5.5 py-4 rounded-[18px]">

                <h2 className="text-xl font-bold">↑34%</h2>

                <span className="text-[#6B8C88] text-sm">
                    Output this week
                </span>

            </div>

        </div>

    </div>

  </section>
  
  <section className="w-full text-center py-10 px-5 border-t border-b border-[rgba(13,30,28,0.08)]">

    <p className="text-[10px] tracking-[4px] text-[#6B8C88] font-semibold mb-8.75">
        TRUSTED BY FORWARD-THINKING TEAMS AT
    </p>

    <div className="flex justify-center items-center gap-20 flex-wrap">

        <div className="flex items-center gap-4.5 text-[#3A5C58] text-[16px] font-bold">
            <div className="w-9 h-9 bg-[#5BBFB5] border border-[#2A9D8F] rounded-[10px] flex items-center justify-center text-[#2A9D8F] text-[16px] ">
                ◫
            </div>
            <span>Nexaflow</span>
        </div>

        <div className="flex items-center gap-4.5 text-[#3A5C58] text-[16px] font-bold">
            <div className="w-9 h-9 bg-[#5BBFB5] border border-[#2A9D8F] rounded-[10px] flex items-center justify-center text-[#2A9D8F] text-[16px]">
                ◉
            </div>
            <span>Meridian</span>
        </div>

        <div className="flex items-center gap-4.5 text-[#3A5C58] text-[16px] font-bold">
            <div className="w-9 h-9 bg-[#5BBFB5] border border-[#2A9D8F] rounded-[10px] flex items-center justify-center text-[#2A9D8F] text-[16px] ">
                ▲
            </div>
            <span>Vanta Labs</span>
        </div>

        <div className="flex items-center gap-4.5 text-[#3A5C58] text-[16px] font-bold">
            <div className="w-9 h-9 bg-[#5BBFB5] border border-[#2A9D8F] rounded-[10px] flex items-center justify-center text-[#2A9D8F] text-[16px] ">
                ▣
            </div>
            <span>Pulsar HQ</span>
        </div>

        <div className="flex items-center gap-4.5 text-[#3A5C58] text-[16px] font-bold">
            <div className="w-9 h-9 bg-[#5BBFB5] border border-[#2A9D8F] rounded-[10px] flex items-center justify-center text-[#2A9D8F] text-[16px] ">
                👤
            </div>
            <span>Arclight</span>
        </div>

        <div className="flex items-center gap-4.5 text-[#3A5C58] text-[16px] font-bold">
            <div className="w-9 h-9 bg-[#5BBFB5] border border-[#2A9D8F] rounded-[10px] flex items-center justify-center text-[#2A9D8F] text-[16px] ">
                ⬢
            </div>
            <span>Korova Co.</span>
        </div>

    </div>

  </section>

   </>
  )
}

export default Graph