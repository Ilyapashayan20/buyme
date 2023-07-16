import type { SVGProps, FC } from 'react'

export interface ICatalogItem {
  Icon: FC<SVGProps<SVGSVGElement>>
  text: string
}
