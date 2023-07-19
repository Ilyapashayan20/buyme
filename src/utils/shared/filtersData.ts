import type { TFilterProps } from 'components/atom/Filter/type'

export const filterData: TFilterProps[] = [
  {
    title: 'Уточніть категорію',
    items: ['Сонцезахисні окуляри', 'Чоловіче взуття', 'Куртки / Жилетки', 'Аксесуари', 'Дорожні сумки / Валізи'],
    warehouse: false,
  },
  {
    title: 'Розмір взуття',
    items: ['Сонцезахисні окуляри', 'Чоловіче взуття', 'Куртки / Жилетки', 'Аксесуари', 'Дорожні сумки / Валізи'],
    warehouse: true,
  },
  {
    title: 'Size',
    items: ['1', '10', '11', '14', '18','41/1', 'XXXXXL', 'M','Універсальний'],
    warehouse: true,
  },
  {
    title: 'Колір',
    items: ['Білий', 'Зелений', 'Куртки / Жилетки', 'Коричневий', ' Жилетки '],
    warehouse: true,
  },
]
