import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { Card } from './Card'
import { Tag } from './Tag'

const learningItems = [
  {
    name: 'Product Design',
    description: 'Turn complex problems into clear, useful experiences.',
  },
  {
    name: 'Technology',
    description:
      'Build a stronger understanding of the tools shaping digital products.',
  },
  {
    name: 'Business',
    description:
      'Develop practical skills for better decisions and stronger teams.',
  },
  {
    name: 'Creative',
    description: 'Explore new ways to communicate, create and tell stories.',
  },
]

export const FindYourNextSkill = () => {
  return (
    <section className="flex flex-col gap-4 py-15 px-5 lg:py-25 lg:px-20">
      <div className="uppercase text-xs font-semibold text-[#3157F6] tracking-[1.44px]">
        Find your next skill
      </div>
      <h2 className="font-heading text-[32px] font-extrabold leading-9 lg:text-[48px] lg:leading-14">
        Learn something worth <br className="hidden lg:inline" /> knowing.
      </h2>
      <div className="font-normal text-base text-[#656770] leading-6.5 pt-2 lg:text-lg lg:leading-7">
        Short, practical courses designed around skills you can put to{' '}
        <br className="hidden lg:inline" /> work immediately.
      </div>
      <div className="grid grid-cols-1 gap-4 pt-8 lg:grid-cols-4 lg:gap-[20px] lg:pt-0">
        {learningItems.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col gap-1 shadow-none border border-[#DBDFEB] items-start p-6 lg:p-7 lg:pb-[26px]"
          >
            <Tag>{String(index + 1).padStart(2, '0')}</Tag>
            <h3 className="font-heading text-xl font-bold text-[#171B2C] pt-[20.5px]">
              {item.name}
            </h3>
            <div className="font-normal text-[#656770] pt-3 pb-6 text-sm leading-6 lg:pb-11.5 lg:leading-5">
              {item.description}
            </div>
            <Button
              variant="ghost"
              className="text-[#171B2C] font-bold p-0 flex items-center gap-2"
            >
              Explore <ArrowRight size={20} />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
