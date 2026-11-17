import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type TagProps = HTMLAttributes<HTMLSpanElement>

export const Tag = ({ className = '', ...props }: TagProps) => {
  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded-md bg-[#E2E8FF] px-2 py-1 text-sm font-bold text-[#3157F6]',
        className,
      )}
      {...props}
    />
  )
}
