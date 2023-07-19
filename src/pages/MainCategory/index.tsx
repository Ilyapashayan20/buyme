import type { FC } from 'react'

import styles from './MainCategories.module.scss'
import { itemData } from 'utils/shared/itemsData'

import { Button, Card } from 'components'
import { filterData } from 'utils/shared/filtersData'
import Filter from 'components/atom/Filter'

const MainCategoriesPage: FC = () => {
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

  const renderFilters = filterData.map((filter, index) => (
    <Filter key={index} title={filter.title} items={filter.items} warehouse={filter.warehouse} />
  ))

  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapper__routes}>
        Головна /<span className={styles.wrapper__routes}>Каталог /</span>
        <span className={styles.wrapper__routes__last}>Для чоловіків</span>
      </p>

      <h3 className={styles.wrapper__categories__title}>Для чоловіків</h3>
      <div className={styles.wrapper__categories__header}>
        <div className={styles.wrapper__categories__header__item__active}>За рейтингом</div>
        <div className={styles.wrapper__categories__header__item}>Дешевше</div>
        <div className={styles.wrapper__categories__header__item}>Дорожче</div>
      </div>

      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__filters}>
          {renderFilters}
          <Button className={styles.wrapper__container__filters__btn1}>Застосувати</Button>
          <Button className={styles.wrapper__container__filters__btn2}>Очистити фільтри</Button>
        </div>
        <div className={styles.wrapper__recommend}>
          <div className={styles.wrapper__recommend__content}>{renderItems}</div>
        </div>
      </div>
    </div>
  )
}

export default MainCategoriesPage
