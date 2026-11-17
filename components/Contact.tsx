import { Clock, MessageCircleMore } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from './Button'

const contactInfo: { icon: ReactNode; title: string; content: ReactNode }[] = [
  {
    icon: <MessageCircleMore size={20} />,
    title: 'Email',
    content: (
      <a
        href="mailto:contact@luma.com"
        className="text-[#3157F6] hover:underline"
      >
        contact@luma.com
      </a>
    ),
  },
  {
    icon: <Clock size={20} />,
    title: 'Response Time',
    content: 'Up to 24 hours on business days',
  },
]

const fieldStyles =
  'w-full rounded-lg border border-[#E4E4EA] bg-[#F9F8F3] px-4 py-3 text-sm text-[#171B2C] placeholder:text-[#6D7384] outline-none transition-colors focus:border-[#3157F6]'

export const Contact = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-10 bg-white py-15 px-5 lg:flex-row lg:items-center lg:gap-15 lg:py-25 lg:px-20">
      <div className="flex w-full max-w-120 flex-col gap-4">
        <div className="uppercase text-xs font-semibold text-[#3157F6] tracking-[1.44px]">
          Contact
        </div>
        <h2 className="font-heading text-[32px] font-extrabold leading-9 text-[#171B2C] lg:text-[48px] lg:leading-14">
          Get in touch
        </h2>
        <div className="font-normal text-base leading-6.5 text-[#656770] lg:text-lg lg:leading-7">
          Have a question? We’re here to help. Whether you’re looking for the
          right course, learning with your team or interested in teaching with
          Luma, we’d love to hear from you.
        </div>

        <div className="flex flex-col gap-4 pt-6">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="flex items-center gap-4 rounded-xl bg-[#F9F8F3] p-4 lg:p-5"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#E2E8FF] text-[#3157F6]">
                {info.icon}
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-[#171B2C]">{info.title}</span>
                <span className="text-[#6D7384]">{info.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="flex w-full max-w-134.5 flex-col gap-6 rounded-2xl border border-[#DBDFEB] bg-white p-5 lg:p-10 shadow-[0_24px_48px_rgba(23,27,44,0.08)]">
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-xl font-bold text-[#171B2C]">Contact us</h3>
          <p className="text-sm text-[#656770]">
            Preencha os campos e entraremos em contato.
          </p>
        </div>

        <label className="flex flex-col gap-3 text-sm font-bold text-[#171B2C]">
          Nome completo
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className={`${fieldStyles} font-normal`}
          />
        </label>

        <label className="flex flex-col gap-3 text-sm font-bold text-[#171B2C]">
          E-mail
          <input
            type="email"
            name="email"
            placeholder="seuemail@exemplo.com"
            required
            className={`${fieldStyles} font-normal`}
          />
        </label>

        <label className="flex flex-col gap-3 text-sm font-bold text-[#171B2C]">
          Sua dúvida
          <textarea
            name="question"
            placeholder="Conte como podemos ajudar..."
            required
            rows={4}
            className={`${fieldStyles} h-30 resize-none font-normal`}
          />
        </label>

        <Button type="submit" className="w-full py-3.5 text-sm font-bold">
          Enviar mensagem
        </Button>
      </form>
    </section>
  )
}
