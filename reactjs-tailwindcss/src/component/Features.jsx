import React from 'react'

const Features = () => {
  return (
   <>
   <section id='Features' className="py-10.5">

  <div className="w-300 max-w-[90%] mx-auto">

    <div className="text-center mb-5">

      <div className="inline-flex items-center gap-2.25 px-5 py-2.5 bg-[#befff2] border-[3px] border-[hsl(168,100%,89%)] rounded-full w-[22%] font-serif">

        <span className="w-2.5 h-2.5 rounded-full bg-[#00A693] shadow-[rgb(35,144,131)]"></span>

        <span className="text-[#00A693] text-[15px] font-medium leading-none uppercase tracking-[1px]">
          PLATFORM FEATURES
        </span>

      </div>

      <h1 className="mt-2.5 text-[56px] leading-none text-[#0D1E1C] font-bold">
        Built for <span className="text-[#1A7A6E] italic font-bold font-['Cormorant_Garamond']">
        clarity
        </span>
        <br/>
        at every scale
      </h1>

      <p className="mt-2.5 mx-auto max-w-150 text-[#3A5C58] text-[22px] leading-[1.4]">
        Every feature is designed to reduce friction and surface what matters.
        No bloat, no configuration maze.
      </p>

    </div>

    <div className="grid grid-cols-2 gap-25 items-center px-5">

      <div>

        <span className="text-[#5BBFB5] tracking-[2px] text-[14px] font-serif">
          01 — UNIFIED DASHBOARD
        </span>

        <h2 className="mt-3.75 mb-3.75 text-[34px] leading-none text-[#0D1E1C] font-bold">
          Every metric, one calm surface
        </h2>

        <p className="text-[#3A5C58] text-[15px] leading-[1.4] mb-5">
          Pull data from any source into a single, composable view.
          Share live dashboards with stakeholders — no exports,
          no screenshots.
        </p>

        <ul className="list-none">

          <li className="mb-2 text-[#3A5C58] text-[18px]">
            <span className="text-[#1A7A6E] mr-3">✓</span>
            Drag-and-drop widget builder
          </li>

          <li className="mb-2 text-[#3A5C58] text-[18px]">
            <span className="text-[#1A7A6E] mr-3">✓</span>
            Real-time data sync across all sources
          </li>

          <li className="mb-2 text-[#3A5C58] text-[18px]">
            <span className="text-[#1A7A6E] mr-3">✓</span>
            Role-based sharing with granular permissions
          </li>

        </ul>

      </div>

      <div className="bg-[#D9ECEA] border border-[rgba(13,30,28,.08)] rounded-4xl p-7.5 w-[90%] h-full">

        <div className="flex gap-5 w-[90%]">

          <div className="flex-1 border border-[rgba(13,30,28,.08)] rounded-[20px] p-2.5 bg-white">

            <span className="text-[#6B8C88] text-[10px]">
              Monthly Revenue
            </span>

            <h3 className="mt-2.5 mb-3.75 text-[20px] text-[#0D1E1C] font-bold">
              $84.2k
            </h3>

            <div className="h-1.5 bg-[#edf3f2] rounded-full">

              <div className="w-[75%] h-full rounded-full bg-linear-to-r from-[#1A7A6E] via-[#2A9D8F] to-[#5BBFB5]"></div>

            </div>

          </div>

          <div className="flex-1 border border-[rgba(13,30,28,.08)] rounded-[20px] p-2.5 bg-white">

            <span className="text-[#6B8C88] text-[10px]">
              Active Users
            </span>

            <h3 className="mt-2.5 mb-3.75 text-[20px] text-[#0D1E1C] font-bold">
              12,481
            </h3>

            <div className="h-1.5 bg-[#edf3f2] rounded-full">

              <div className="w-[75%] h-full rounded-full bg-linear-to-r from-[#1A7A6E] via-[#2A9D8F] to-[#5BBFB5]"></div>

            </div>

          </div>

        </div>

        <div className="mt-2.5 border border-[rgba(13,30,28,.08)] rounded-3xl p-3 bg-white">

          <h4 className="mb-5 text-[#3A5C58] font-bold ">
            Recent Activity
          </h4>

          <div className="flex justify-between items-center p-1.25 border border-[rgba(13,30,28,.08)] rounded-[14px] text-[15px] mb-2.5 bg-[#D9ECEA]">

            <span className="text-[#3A5C58]">
              Q3 Report synced
            </span>

            <button className="border-none px-4 py-2 rounded-full text-[13px] font-semibold bg-[rgba(26,122,110,.12)] text-[#1A7A6E]">
              Done
            </button>

          </div>

          <div className="flex justify-between items-center p-1.25 border border-[rgba(13,30,28,.08)] rounded-[14px] text-[15px] mb-2.5 bg-[#D9ECEA]">

            <span className="text-[#3A5C58]">
              Team review pending
            </span>

            <button className="border-none px-4 py-2 rounded-full text-[13px] font-semibold bg-[rgba(42,157,143,.12)] text-[#2A9D8F]">
              Active
            </button>

          </div>

          <div className="flex justify-between items-center p-1.25 border border-[rgba(13,30,28,.08)] rounded-[14px] text-[15px] bg-[#D9ECEA]">

            <span className="text-[#3A5C58]">
              Analytics export
            </span>

            <button className="border-none px-4 py-2 rounded-full text-[13px] font-semibold bg-[rgba(107,140,136,.12)] text-[#6B8C88]">
              Queued
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="py-2.0">

    <div className="w-[85%] mx-auto flex items-center justify-between gap-52.5">

        <div className="w-[80%] p-6.25 border border-[rgba(13,30,28,.08)] rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,.05)] bg-[#D9ECEA]">

            <div className="flex justify-between items-center px-1.5 py-1.25 mb-3.5 bg-white rounded-2xl">

                <span className="text-[#3A5C58] text-[15px]">
                    Weekly digest → Slack
                </span>

                <span className="px-4 py-1.25 rounded-full text-[10px] font-semibold text-[#1A7A6E] bg-[rgba(26,122,110,.12)]">
                    Running
                </span>

            </div>

            <div className="flex justify-between items-center px-2.5 py-1.25 mb-3.5 bg-white rounded-2xl">

                <span className="text-[#3A5C58] text-[15px]">
                    Lead scored → Notify sales
                </span>

                <span className="px-4 py-1.25 rounded-full text-[10px] font-semibold text-[#1A7A6E] bg-[rgba(26,122,110,.12)]">
                    Running
                </span>

            </div>

            <div className="flex justify-between items-center px-2.5 py-1.25 mb-3.5 bg-white rounded-2xl">

                <span className="text-[#3A5C58] text-[15px]">
                    Invoice due → Alert CFO
                </span>

                <span className="px-4 py-1.25 rounded-full text-[10px] font-semibold text-[#2A9D8F] bg-[rgba(42,157,143,.12)]">
                    Active
                </span>

            </div>

            <div className="flex justify-between items-center px-2.5 py-1.25 mb-3.5 bg-white rounded-2xl">

                <span className="text-[#3A5C58] text-[15px]">
                    Report sync → Drive
                </span>

                <span className="px-4 py-1.25 rounded-full text-[10px] font-semibold text-[#6B8C88] bg-[rgba(107,140,136,.12)]">
                    Paused
                </span>

            </div>

            <div className="flex gap-2.5 mt-2.5">

                <div className="flex-1 p-2.5 border border-[rgba(13,30,28,.08)] rounded-[20px] bg-white">

                    <p className="text-[#6B8C88] text-[10px] mb-2.5">
                        Hours Saved This Month
                    </p>

                    <h3 className="text-[30px] text-[#0D1E1C] mb-px font-bold">
                        148h
                    </h3>

                    <div className="h-1.5 bg-[#edf3f2] rounded-full">

                        <div className="w-[90%] h-full rounded-full bg-linear-to-r from-[#1A7A6E] via-[#2A9D8F] to-[#5BBFB5]"></div>

                    </div>

                </div>

                <div className="flex-1 p-2.5 border border-[rgba(13,30,28,.08)] rounded-[20px] bg-white">

                    <p className="text-[#6B8C88] text-[10px] mb-2.5">
                        Flows
                    </p>

                    <h3 className="text-[30px] text-[#0D1E1C] mb-px font-bold">
                        24
                    </h3>

                </div>

            </div>

        </div>

        <div className="w-full">

            <h2 className="text-[#0D1E1C] text-[34px] leading-none mb-3.75 font-bold">
                Routines that run
                <br/>
                themselves
            </h2>

            <p className="text-[#3A5C58] text-[15px] leading-[1.4] mb-6.25">
                Build automation flows with natural language.
                Clearwave understands your intent and suggests
                the next step — no flowchart diagrams needed.
            </p>

            <ul className="list-none">

                <li className="relative pl-6.25 mb-4.5 text-[#3A5C58] text-[18px] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#1A7A6E] before:font-bold">
                    Natural language automation builder
                </li>

                <li className="relative pl-6.25 mb-4.5 text-[#3A5C58] text-[18px] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#1A7A6E] before:font-bold">
                    500+ pre-built trigger templates
                </li>

                <li className="relative pl-6.25 mb-4.5 text-[#3A5C58] text-[18px] before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-[#1A7A6E] before:font-bold">
                    Full audit trail for every action
                </li>

            </ul>

        </div>

    </div>

</section>
<section className="py-12.5">
  <div className="w-300 max-w-[90%] mx-auto">
    <div className="grid grid-cols-2 gap-25 items-center px-15">
            <div>
              <span className="text-[#5BBFB5] tracking-[2px] text-[14px] font-serif">
                    03 — TEAM COLLABORATION
                </span>

                <h2 className="mt-3.75 mb-3.75 text-[34px] leading-none text-[#0D1E1C] font-bold">
                    Comments, context,<br/>
                    and <span>
                        clarity
                    </span>
                </h2>

                <p className="text-[#3A5C58] text-[15px] leading-[1.4] mb-5">
                    Annotate anything, assign tasks inline, and resolve
                    conversations without switching tabs. The work and
                    discussion stay together.
                </p>

                <ul className="list-none">

                    <li className="mb-2 text-[#3A5C58] text-[18px]">
                        <span className="text-[#1A7A6E] mr-3">✓</span>
                        Inline comments on any data point
                    </li>

                    <li className="mb-2 text-[#3A5C58] text-[18px]">
                        <span className="text-[#1A7A6E] mr-3">✓</span>
                        Threaded task assignments
                    </li>

                    <li className="mb-2 text-[#3A5C58] text-[18px]">
                        <span className="text-[#1A7A6E] mr-3">✓</span>
                        Real-time presence and live cursors
                    </li>

                </ul>

            </div>
            <div className="bg-[#D9ECEA] border border-[rgba(13,30,28,.08)] rounded-4xl p-7.5 shadow-[0_30px_80px_rgba(0,0,0,.05)] w-full h-full">

                <div className="flex gap-5 w-[90%]">

                    <div className="flex-1 border border-[rgba(13,30,28,.08)] rounded-[20px] p-2.5 bg-white">

                        <span className="text-[#6B8C88] text-[10px]">
                            Online Now
                        </span>

                        <div className="flex items-center mt-2.5">

                            <span className="w-6.5 h-6.5 rounded-full bg-[#1A7A6E] text-white flex items-center justify-center -mr-2">A</span>

                            <span className="w-6.5 h-6.5 rounded-full bg-[#1A7A6E] text-white flex items-center justify-center -mr-2">K</span>

                            <span className="w-6.5 h-6.5 rounded-full bg-[#1A7A6E] text-white flex items-center justify-center -mr-2">M</span>

                            <small className="ml-3.75 text-[#6B8C88]">+5</small>

                        </div>

                    </div>

                    <div className="flex-1 border border-[rgba(13,30,28,.08)] rounded-[20px] p-2.5 bg-white">

                        <span className="text-[#6B8C88] text-[10px]">
                            Open Tasks
                        </span>

                        <h3 className="mt-2.5 mb-3.75 text-[20px] text-[#0D1E1C] font-bold">
                            37
                        </h3>

                    </div>

                </div>

                <div className="mt-2.5 border border-[rgba(13,30,28,.08)] rounded-3xl p-3 bg-white">

                    <h4 className="mb-5 text-[#3A5C58] font-bold">
                        Recent Activity
                    </h4>

                    <div className="flex justify-between items-center p-1.25 border border-[rgba(13,30,28,.08)] rounded-[14px] text-[15px] mb-2.5 bg-[#D9ECEA]">

                        <span className="text-[#3A5C58]">
                            Alex → Q3 chart updated
                        </span>

                        <button className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[rgba(26,122,110,.12)] text-[#1A7A6E]">
                            Resolved
                        </button>

                    </div>

                    <div className="flex justify-between items-center p-1.25 border border-[rgba(13,30,28,.08)] rounded-[14px] text-[15px] mb-2.5 bg-[#D9ECEA]">

                        <span className="text-[#3A5C58]">
                            Kim → Review needed
                        </span>

                        <button className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[rgba(42,157,143,.12)] text-[#2A9D8F]">
                            Open
                        </button>

                    </div>

                    <div className="flex justify-between items-center p-1.25 border border-[rgba(13,30,28,.08)] rounded-[14px] text-[15px] bg-[#D9ECEA]">

                        <span className="text-[#3A5C58]">
                            Maya → Approved & shipped
                        </span>

                        <button className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[rgba(107,140,136,.12)] text-[#6B8C88]">
                            Done
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

<section className="py-12.5 border-t border-b border-[rgba(13,30,28,.08)]">

    <div className="w-[90%] mx-auto grid grid-cols-4">

        <div className="px-5 py-2.5 border-r-2 border-[rgba(13,30,28,.08)]">

            <div className="w-5 h-0.5 rounded-full bg-[#1A7A6E] mb-5"></div>

            <h2 className="text-[30px] leading-none font-bold text-[#0D1E1C] mb-px">
                17<span className="text-[20px] text-[#1A7A6E]">k+</span>
            </h2>

            <h4 className="text-[15px] font-semibold text-[#0D1E1C] mb-1.25">
                Teams Worldwide
            </h4>

            <p className="text-[10px] text-[#6B8C88] leading-[1.6]">
                Across 80+ countries
            </p>

        </div>

        <div className="px-5 py-2.5 border-r-2 border-[rgba(13,30,28,.08)]">

            <div className="w-5 h-0.5 rounded-full bg-[#1A7A6E] mb-5"></div>

            <h2 className="text-[30px] leading-none font-bold text-[#0D1E1C] mb-px">
                11<span className="text-[20px] text-[#1A7A6E]">%</span>
            </h2>

            <h4 className="text-[15px] font-semibold text-[#0D1E1C] mb-1.25">
                Avg. Productivity Gain
            </h4>

            <p className="text-[10px] text-[#6B8C88] leading-[1.6]">
                Measured in first 30 days
            </p>

        </div>

        <div className="px-5 py-2.5 border-r-2 border-[rgba(13,30,28,.08)]">

            <div className="w-5 h-0.5 rounded-full bg-[#1A7A6E] mb-5"></div>

            <h2 className="text-[30px] leading-none font-bold text-[#0D1E1C] mb-px">
                34.3<span className="text-[20px] text-[#1A7A6E]">%</span>
            </h2>

            <h4 className="text-[15px] font-semibold text-[#0D1E1C] mb-1.25">
                Uptime SLA
            </h4>

            <p className="text-[10px] text-[#6B8C88] leading-[1.6]">
                Guaranteed and monitored
            </p>

        </div>

        <div className="px-5 py-2.5">

            <div className="w-5 h-0.5 rounded-full bg-[#1A7A6E] mb-5"></div>

            <h2 className="text-[30px] leading-none font-bold text-[#0D1E1C] mb-px">
                6<span className="text-[20px] text-[#1A7A6E]">h</span>
            </h2>

            <h4 className="text-[15px] font-semibold text-[#0D1E1C] mb-1.25">
                Saved Per Team Weekly
            </h4>

            <p className="text-[10px] text-[#6B8C88] leading-[1.6]">
                On average across all plans
            </p>

        </div>

    </div>

</section>
   </>
  )
}

export default Features