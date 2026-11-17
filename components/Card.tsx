import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = HTMLAttributes<HTMLDivElement>

export const Card = ({ className = '', ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        'inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-[#171B2C] shadow-[0_8px_24px_rgba(23,27,44,0.12)]',
        className,
      )}
      {...props}
    />
  )
}
