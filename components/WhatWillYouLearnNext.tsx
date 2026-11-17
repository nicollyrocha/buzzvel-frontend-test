import Image from 'next/image'
import { Button } from './Button'

const avatars = [
  { src: '/images/person-1.webp', alt: 'Person 1' },
  { src: '/images/person-2.webp', alt: 'Person 2' },
  { src: '/images/person-3.webp', alt: 'Person 3' },
  { src: '/images/person-4.webp', alt: 'Person 4' },
]

const shapes = [
  {
    src: 'container.svg',
    width: 108,
    height: 108,
    className: 'left-[22px] top-4',
  },
  {
    src: 'container-1.svg',
    width: 120,
    height: 97,
    className: 'left-14 bottom-0',
  },
  {
    src: 'container-4.svg',
    width: 34,
    height: 67,
    className: 'left-0 top-[230px]',
  },
  {
    src: 'container-7.svg',
    width: 67,
    height: 67,
    className: 'left-[317px] top-[42px]',
  },
  {
    src: 'icon-container.svg',
    width: 102,
    height: 102,
    className: 'left-68 top-90',
  },
  {
    src: 'icon-container-2.svg',
    width: 32,
    height: 32,
    className: 'left-[141px] top-[214px]',
  },
  {
    src: 'container-3.svg',
    width: 136,
    height: 113,
    className: 'right-0 top-0',
  },
  {
    src: 'container-2.svg',
    width: 40,
    height: 2,
    className: 'right-44 bottom-0',
  },
  {
    src: 'container-5.svg',
    width: 32,
    height: 32,
    className: 'right-10 top-[429px]',
  },
  {
    src: 'container-6.svg',
    width: 32,
    height: 32,
    className: 'right-[371px] top-[43px]',
  },
  {
    src: 'icon-container-1.svg',
    width: 160,
    height: 160,
    className: 'right-10 top-45',
  },
  {
    src: 'icon-container-3.svg',
    width: 62,
    height: 62,
    className: 'right-[202px] top-[82px]',
  },
  {
    src: 'icon-container-4.svg',
    width: 48,
    height: 48,
    className: 'right-[269px] top-[381px]',
  },
]

export const WhatWillYouLearnNext = () => {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#FFF1C2] py-15 px-5 lg:py-25 lg:px-20">
      {shapes.map((shape) => (
        <Image
          key={shape.src}
          src={`/images/yellow-background/${shape.src}`}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`pointer-events-none absolute hidden lg:block ${shape.className}`}
        />
      ))}

      <div className="relative flex w-full flex-col items-center lg:w-auto">
        <div className="flex -space-x-2">
          {avatars.map((avatar) => (
            <div key={avatar.src} className="relative size-10 rounded-full">
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={40}
                height={40}
                className="size-10 rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-[2.5px] border-[#FFEE7E]" />
            </div>
          ))}
        </div>

        <h2 className="font-heading pt-7 text-center text-[36px] font-extrabold leading-10 text-[#171B2C] lg:text-[56px] lg:leading-16">
          What will you learn next?
        </h2>
        <div className="pt-4 text-center text-base leading-6.5 text-[#656770] lg:text-lg lg:leading-7">
          Start with one course. Build from there.
        </div>

        <div className="flex w-full flex-col gap-3 pt-10 lg:w-auto lg:flex-row">
          <Button className="w-full px-7 py-3.5 text-sm lg:w-auto">
            Explore all courses
          </Button>
          <Button
            variant="secondary"
            className="w-full px-7 py-3.5 text-sm lg:w-auto"
          >
            Join Luma
          </Button>
        </div>
      </div>
    </section>
  )
}
