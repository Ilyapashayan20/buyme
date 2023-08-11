export type TCardProps = {
  id?: string
  image: string
  title: string
  rate: number
  reviwers: number
  price: number
  promotion?: number
  oldPrice?: number
  isCheck?: boolean,
  saved?:boolean,
  onLikeClick?: any
}
