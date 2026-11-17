import Image from 'next/image'
import logo from '../public/images/link.svg'

const linkGroups = [
  {
    title: 'Explore',
    links: ['Courses', 'Categories', 'Instructors', 'For Teams'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Journal'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact', 'Terms', 'Privacy'],
  },
]

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-[#171B2C] px-5 pt-15 pb-8 lg:px-20 lg:pt-19 lg:pb-11">
      <div className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-[1fr_15rem_15rem_12rem] lg:gap-0">
        <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
          <Image
            src={logo}
            alt="Luma"
            width={53.74}
            height={16.92}
            className="brightness-0 invert"
          />
          <p className="text-sm lg:max-w-60 leading-6 text-[#A0A3B1]">
            Practical learning for curious people.
          </p>
        </div>

        {linkGroups.map((group) => (
          <nav key={group.title} className="flex flex-col gap-4">
            <span className="uppercase text-xs font-semibold tracking-[1.44px] text-white">
              {group.title}
            </span>
            {group.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#A0A3B1] transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="mt-12 border-t border-white/15 pt-8 text-center text-sm lg:mt-16 lg:text-left text-[#DBDFEB]">
        © 2026 Luma Learning
      </div>
    </footer>
  )
}
