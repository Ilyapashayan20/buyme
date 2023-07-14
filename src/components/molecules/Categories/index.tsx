import type { FC } from 'react'

import { Button, Title } from 'components'

import styles from './Categories.module.scss'
import { categoriesData } from './utils'

const Categories: FC = () => {
  const subtitle = `В онлайн-каталозі BuyMe представлено близько 100 000 найменувань одягу, електроніки, меблів та інших товарів для усіх сфер життя`

  const renderCategories = categoriesData.map((element, index) => (
    <div className={styles.wrapper__item} key={index}>
      <img src={element.image} alt='category' width='150px' height='150px' />

      <p className={styles.wrapper__title}>{element.title}</p>
    </div>
  ))

  return (
    <article className={styles.wrapper}>
      <Title title='Категорії' subtitle={subtitle} />

      <div className={styles.wrapper__content}>{renderCategories}</div>

      <Button>Дивитися усі</Button>
    </article>
  )
}

export default Categories
