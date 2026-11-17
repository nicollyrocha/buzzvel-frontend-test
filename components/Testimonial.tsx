import { Icon } from './Icon'

const stats = [
  { value: '24K+', label: 'active learners' },
  { value: '120+', label: 'expert-led courses' },
  { value: '92%', label: 'complete their first course' },
]

export const Testimonial = () => {
  return (
    <section className="flex w-full flex-col bg-white py-15 px-5 lg:flex-row lg:items-center lg:py-25 lg:px-20">
      <figure className="flex flex-col lg:flex-1 lg:pr-12">
        <Icon
          imgSrc="/images/quote.svg"
          alt=""
          width={24}
          height={22}
          className="mb-6"
        />
        <blockquote className="font-heading max-w-145 text-[22px] font-semibold leading-8 text-[#171B2C] lg:text-[28px] lg:leading-10.5">
          The lessons are short enough to fit into my week, but detailed enough
          that I actually leave with something I can use.
        </blockquote>
        <figcaption className="pt-8 flex items-center gap-4">
          <Icon
            imgSrc="/images/alex-morgan.webp"
            alt="Alex Morgan"
            width={48}
            height={48}
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-bold text-[#171B2C]">
              Alex Morgan
            </span>
            <span className="text-sm text-[#656770]">Product Manager</span>
          </div>
        </figcaption>
      </figure>

      <div className="mt-16 grid grid-cols-3 gap-3 lg:mt-0 lg:flex lg:w-98 lg:shrink-0 lg:flex-col lg:gap-8 lg:self-stretch lg:border-l lg:border-[#E4E4EA] lg:pl-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="font-heading text-[40px] font-extrabold leading-none text-[#3157F6] lg:text-[64px]">
              {stat.value}
            </span>
            <span className="text-sm leading-6 text-[#6D7384] lg:leading-5">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
