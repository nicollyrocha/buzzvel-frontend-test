import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from './Button'
import { Tag } from './Tag'

const courseInfo = ['8 lessons', '2h 40min', 'Intermediate']

export const MostPopularThisMonth = () => {
  return (
    <section className="flex w-full flex-col gap-12 bg-[#3157F6] py-15 px-5 text-white lg:flex-row lg:items-center lg:gap-15 lg:py-25 lg:px-20">
      <div className="relative w-full max-w-134.5 min-w-0">
        <Image
          className="h-auto w-full rounded-2xl"
          src="/images/most-popular-this-month.webp"
          alt="Designing products people understand"
          width={538}
          height={408}
        />
        <Tag className="absolute -left-3 -top-3 bg-[#FFEE7E] px-2.5 text-xs uppercase tracking-[1.2px] text-[#171B2C] lg:-left-2.5 lg:-top-2.5">
          Featured course
        </Tag>
      </div>

      <div className="flex flex-col gap-4 lg:shrink-0">
        <div className="uppercase text-xs font-semibold tracking-[1.44px] text-white/80">
          Most popular this month
        </div>
        <h2 className="font-heading text-[32px] font-extrabold leading-9 lg:text-[48px] lg:leading-14">
          Designing products <br className="hidden lg:inline" /> people
          understand.
        </h2>
        <div className="font-normal text-base leading-6 text-white/90 pt-2 lg:leading-7">
          Learn how to turn complex workflows into simple, intentional product{' '}
          <br className="hidden lg:inline" />
          experiences through research, structure and thoughtful interaction{' '}
          <br className="hidden lg:inline" />
          design.
        </div>
        <div className="text-base text-white/90 pt-2 font-normal">
          with Maya Chen · Senior Product Designer
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {courseInfo.map((info) => (
            <Tag
              key={info}
              className="border border-white/60 bg-transparent px-3.5 py-1.5 font-normal text-white"
            >
              {info}
            </Tag>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:items-center lg:gap-2">
          <Button
            variant="accent"
            className="w-full text-sm px-7 py-3.5 lg:w-auto"
          >
            View course
          </Button>
          <Button
            variant="ghost"
            className="flex text-sm items-center gap-2 font-bold text-white hover:text-white/80"
          >
            Browse all courses <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
