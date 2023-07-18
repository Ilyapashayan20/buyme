import type { FC } from 'react'

import { Button, Title } from 'components'

import { categoriesData } from './utils'
import styles from './Categories.module.scss'

const Categories: FC = () => {
  const subtitle = `В онлайн-каталозі BuyMe представлено близько 100 000 найменувань одягу, електроніки, меблів та інших товарів для усіх сфер життя`

  const renderCategories = categoriesData.map((element, index) => (
    <div className={styles.wrapper__item} key={index}>
      <div className={styles.wrapper__item__image_container}>
        <img src={element.image} alt='category' width='100%' height='100%' />
      </div>

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
