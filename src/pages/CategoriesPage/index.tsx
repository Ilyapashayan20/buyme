import type { FC } from 'react'

import { Card, Title } from 'components'
import { itemData } from 'utils/shared/itemsData'
import { categoriesData } from 'components/molecules/Categories/utils'

import styles from './CategoriesPage.module.scss'

const CategoriesPage: FC = () => {
  const renderCategories = categoriesData.map((element, index) => (
    <div className={styles.wrapper__categories__item} key={index}>
      <div className={styles.wrapper__categories__item__image_container}>
        <img src={element.image} alt='category' width='100%' height='100%' />
      </div>

      <p className={styles.wrapper__categories__item__title}>{element.title}</p>
    </div>
  ))

  const renderItems = itemData.map((element, index) => (
    <Card
      key={index}
      image={element.image}
      title={element.title}
      rate={element.rate}
      reviwers={element.reviwers}
      price={element.price}
    />
  ))

  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapper__routes}>
        Головна /<span className={styles.wrapper__routes__last}>Каталог</span>
      </p>

      <h3 className={styles.wrapper__categories__title}>Каталог</h3>

      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__categories}>{renderCategories}</div>

        <div className={styles.wrapper__recommend}>
          <Title title='BuyMe рекомендує' />

          <div className={styles.wrapper__recommend__content}>{renderItems}</div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage
