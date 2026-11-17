import { twMerge } from 'tailwind-merge'

type RatingProps = {
  value: number
  max?: number
  label?: string
  className?: string
}

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 20 20"
    className={twMerge(
      'size-3.5',
      filled ? 'fill-[#FFEE7E]' : 'fill-[#DBDFEB]',
    )}
    aria-hidden="true"
  >
    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
  </svg>
)

export const Rating = ({
  value,
  max = 5,
  label,
  className = '',
}: RatingProps) => {
  const filledStars = Math.round(value)

  return (
    <div className={twMerge('inline-flex items-center gap-3', className)}>
      <div
        className="flex gap-1"
        role="img"
        aria-label={`${value} de ${max} estrelas`}
      >
        {Array.from({ length: max }, (_, index) => (
          <Star key={index} filled={index < filledStars} />
        ))}
      </div>
      <span className="text-sm text-[#171B2C]">
        {value}
        {label && ` ${label}`}
      </span>
    </div>
  )
}
