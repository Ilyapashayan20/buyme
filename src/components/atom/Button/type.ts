import type { SVGProps, FC } from 'react'

export type TButtonProps = {
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  LeftIcon?: FC<SVGProps<SVGSVGElement>>
  isTransparent?: boolean
}
