import { Contact } from '@/components/Contact'
import { FindYourNextSkill } from '@/components/FindYourNextSkill'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HowLumaWorks } from '@/components/HowLumaWorks'
import { LearnAtYourOwnPace } from '@/components/LearnAtYourOwnPace'
import { MostPopularThisMonth } from '@/components/MostPopularThisMonth'
import { Testimonial } from '@/components/Testimonial'
import { ThePeople } from '@/components/ThePeople'
import { WhatWillYouLearnNext } from '@/components/WhatWillYouLearnNext'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip items-center justify-start bg-[#FFFFFF] font-sans text-[#171B2C]">
      <Header />
      <main className="flex w-full flex-col">
        <LearnAtYourOwnPace />
        <FindYourNextSkill />
        <MostPopularThisMonth />
        <HowLumaWorks />
        <Testimonial />
        <ThePeople />
        <Contact />
        <WhatWillYouLearnNext />
      </main>
      <Footer />
    </div>
  )
}
