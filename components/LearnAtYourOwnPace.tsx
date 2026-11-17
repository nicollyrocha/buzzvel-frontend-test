import Image from 'next/image'
import { Button } from './Button'
import { Card } from './Card'
import { Icon } from './Icon'
import { Rating } from './Rating'
import { Tag } from './Tag'

const icons = [
  {
    imgSrc: '/images/person-1.webp',
    alt: 'Person 1',
  },
  {
    imgSrc: '/images/person-2.webp',
    alt: 'Person 2',
  },
  {
    imgSrc: '/images/person-3.webp',
    alt: 'Person 3',
  },
]

export const LearnAtYourOwnPace = () => {
  return (
    <section className="flex flex-col-reverse gap-10 bg-[#F9F8F3] w-full py-15 px-5 justify-between lg:flex-row lg:gap-15 lg:py-25 lg:px-20">
      <div className="flex flex-col gap-4 lg:shrink-0">
        <div className="uppercase text-xs font-semibold text-[#3157F6] tracking-[1.44px]">
          Learn at your own pace
        </div>
        <h1 className="font-heading text-[40px] font-extrabold leading-11.5 lg:text-[64px] lg:leading-17.5">
          Build skills that <br className="hidden lg:inline" /> actually move
          you <br className="hidden lg:inline" /> forward.
        </h1>
        <div className="font-normal text-base text-[#656770] leading-6.5 pt-2 lg:text-lg lg:leading-7">
          Practical courses taught by people who do the work{' '}
          <br className="hidden lg:inline" /> every day. Learn design,
          technology, business and more <br className="hidden lg:inline" /> —
          one focused lesson at a time.
        </div>

        <div className="flex flex-col pt-4 gap-3 lg:flex-row">
          <Button className="w-full px-7 py-3.5 lg:w-auto">
            Explore courses
          </Button>
          <Button variant="secondary" className="w-full px-7 py-3.5 lg:w-auto">
            See how it works
          </Button>
        </div>

        <div className="flex gap-3 items-center justify-center pt-6 lg:justify-start lg:pt-4">
          <div className="flex -space-x-[7px]">
            {icons.map((icon, index) => (
              <Icon
                key={index}
                imgSrc={icon.imgSrc}
                alt={icon.alt}
                width={32}
                height={32}
              />
            ))}
          </div>
          <div className="text-sm font-bold text-[#171B2C]">
            Trusted by 24,000+{' '}
            <span className="font-normal text-[#656770]">learners</span>
          </div>
        </div>
      </div>

      <div className="relative mx-2 h-fit max-w-125 min-w-0 lg:mx-0 lg:w-full">
        <div className="absolute -right-4.5 top-6 bottom-3.5 w-32 rounded-3xl bg-[#FFCB9A] lg:-right-10 lg:bottom-7" />
        <div className="absolute -left-4.5 bottom-3 size-15 rounded-full bg-[#E2E8FF] lg:-left-12 lg:size-36" />

        <Image
          className="relative h-auto w-full rounded-3xl"
          src="/images/person-with-laptop.webp"
          preload
          alt="Learn at your own pace"
          width={500}
          height={520}
        />

        <Card className="absolute -left-2 top-1.5 lg:-left-6 lg:top-4">
          <Tag>120+</Tag>
          expert-led courses
        </Card>

        <Card className="absolute -right-4.5 bottom-9 lg:-right-14 lg:bottom-12">
          <Rating value={4.9} label="avg rating" />
        </Card>
      </div>
    </section>
  )
}
