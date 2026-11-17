import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from '../public/images/link.svg'
import { Button } from './Button'

const navLinks = ['Courses', 'For Teams', 'Community', 'About']

export const Header = () => {
  return (
    <header className="relative flex w-full items-center justify-between py-6 px-5 bg-[#F9F8F3] border-b-[1px] border-b-[var(--line-1,#DBDFEB)] lg:py-[22.5px] lg:px-20 lg:bg-[#FFFFFF]">
      <Image src={logo} alt="Luma" width={53.74} height={16.92} />

      <nav
        aria-label="Main"
        className="absolute left-1/2 hidden -translate-x-1/2 whitespace-nowrap gap-8 text-[#656770] font-normal text-[14px] lg:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="transition-all duration-200 ease-in-out hover:text-[#171B2C] hover:underline"
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="hidden gap-6 lg:flex">
        <Button variant="ghost">Log in</Button>
        <Button variant="primary">Start learning</Button>
      </div>

      <details className="group lg:hidden">
        <summary
          className="flex cursor-pointer list-none text-[#171B2C] [&::-webkit-details-marker]:hidden"
          aria-label="Menu"
        >
          <Menu size={28} strokeWidth={1.5} className="group-open:hidden" />
          <X size={28} strokeWidth={1.5} className="hidden group-open:block" />
        </summary>
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-full z-50 flex flex-col gap-5 border-b border-[#DBDFEB] bg-[#F9F8F3] px-5 py-6 text-[#656770]"
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-[#171B2C]">
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button variant="secondary" className="w-full py-3.5">
              Log in
            </Button>
            <Button variant="primary" className="w-full py-3.5">
              Start learning
            </Button>
          </div>
        </nav>
      </details>
    </header>
  )
}
