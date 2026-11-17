import Image from 'next/image'
import { Button } from './Button'

export const ThePeople = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-12 bg-[#F9F8F3] py-15 px-5 lg:flex-row lg:items-center lg:gap-15 lg:py-25 lg:px-20">
      <div className="flex flex-col gap-2 lg:shrink-0">
        <div className="uppercase text-xs font-semibold text-[#3157F6] tracking-[1.44px]">
          The people
        </div>
        <h2 className="font-heading text-[32px] font-extrabold leading-9 text-[#171B2C] lg:text-[48px] lg:leading-14">
          Meet international <br className="hidden lg:inline" /> students
          &amp; teachers
        </h2>
        <div className="max-w-134 font-normal text-base leading-6.5 text-[#171B2C] pt-4 lg:text-lg lg:leading-7 lg:text-[#656770] lg:pt-6">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </div>

        <div className="pt-6">
          <Button variant="secondary" className="text-sm px-7 py-3.5">
            Explore teachers and students
          </Button>
        </div>
      </div>

      <div className="w-full max-w-133.75 min-w-0 self-center">
        <Image
          className="h-auto w-full"
          src="/images/the-people.webp"
          alt="Students and teachers from around the world"
          width={535}
          height={530}
        />
      </div>
    </section>
  )
}
