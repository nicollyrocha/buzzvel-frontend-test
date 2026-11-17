import type { ReactNode } from 'react'

type Step = {
  title: string
  description: string
  icon: ReactNode
}

const steps: Step[] = [
  {
    title: 'Choose your focus',
    description:
      'Find courses based on the skill you want to build, not endless content categories.',
    icon: (
      <div className="relative size-11 rounded-full bg-[#E2E8FF]">
        <div className="absolute left-1.5 top-1.75 size-4.75 rounded-[5px] bg-[#3157F6]" />
      </div>
    ),
  },
  {
    title: 'Learn from experience',
    description:
      'Follow concise lessons created by professionals who use these skills.',
    icon: (
      <div className="relative size-11 rotate-10 rounded-lg bg-[#FFC799]">
        <div className="absolute bottom-1.25 right-0.5 size-5.5 rounded-full bg-[#FF6A45]" />
      </div>
    ),
  },
  {
    title: 'Put it into practice',
    description:
      'Every course includes practical exercises designed to turn knowledge into action.',
    icon: (
      <div className="relative size-11 rounded-[10px] bg-[#FFF1C2]">
        <div className="absolute bottom-1.5 left-1.5 size-4 rounded-full bg-[#E8D45A]" />
      </div>
    ),
  },
]

export const HowLumaWorks = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 bg-[#F9F8F3] py-15 px-5 lg:py-25 lg:px-20">
      <div className="uppercase text-xs font-semibold text-[#3157F6] tracking-[1.44px]">
        How Luma works
      </div>
      <h2 className="font-heading text-[32px] font-extrabold leading-9 text-center lg:text-[48px] lg:leading-14">
        Less browsing. More learning.
      </h2>

      <div className="grid w-full grid-cols-1 pt-8 lg:grid-cols-3 lg:gap-15 lg:pt-16">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col">
            {index < steps.length - 1 && (
              <div className="absolute left-0 -right-15 top-5.5 hidden h-px bg-[#DBDFEB] lg:block" />
            )}

            {index > 0 && (
              <div className="mt-9 ml-7 h-12 w-px bg-[#DBDFEB] lg:hidden" />
            )}

            <div className="relative z-10 size-14 lg:size-11">
              <div className="origin-top-left scale-[1.2727] lg:scale-100">
                {step.icon}
              </div>
            </div>

            <div className="uppercase text-xs font-semibold text-[#6D7384] tracking-[1.44px] pt-6">
              Step {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="font-heading text-xl font-bold text-[#171B2C] pt-3">
              {step.title}
            </h3>
            <div className="font-normal text-sm leading-6 text-[#656770] pt-3 lg:text-base">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
