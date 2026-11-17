import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary' | 'ghost' | 'secondary' | 'accent'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const baseStyles =
  'inline-flex items-center text-[14px] justify-center rounded-lg text-base leading-6 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3456FF] disabled:cursor-not-allowed disabled:opacity-50'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#3157F6] font-[700] text-white hover:bg-[#2A45CC] px-[20px] py-[10px]',
  secondary:
    'bg-[#FFFFFF] font-[700] text-[#171B2C] hover:bg-[#D1D5DB] px-[20px] py-[10px] border border-[#DBDFEB]',
  accent:
    'bg-[#FFEE7E] font-[700] text-[#171B2C] hover:bg-[#FFE54D] px-[20px] py-[10px]',
  ghost:
    'bg-transparent font-[400] text-[#656770] hover:text-[#171B2C] px-[16px] py-[10px]',
}

export const Button = ({
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  )
}
