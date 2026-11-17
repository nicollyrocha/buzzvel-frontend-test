import Image from 'next/image'

export const Icon = ({
  imgSrc,
  alt = 'Icon',
  className = '',
  width = 24,
  height = 24,
  ...props
}: {
  imgSrc: string
  alt?: string
  className?: string
  width?: number
  height?: number
  [key: string]: unknown
}) => {
  return (
    <Image
      className={className}
      style={{ width, height }}
      {...props}
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
    />
  )
}
