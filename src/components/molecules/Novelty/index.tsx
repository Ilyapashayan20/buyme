import type { FC } from 'react'

import { Title, Card } from 'components'
import { itemData } from 'utils/shared/itemsData'

import styles from './Novelty.module.scss'

const Novelty: FC = () => {
  const subtitle = `Інтернет-магазин BuyMe — це доступні ціни та широкий асортимент товарів зі щоденним оновленням`

  const renderItems = itemData.map((element, index) => (
    <Card
      key={index}
      image={element.image}
      title={element.title}
      rate={element.rate}
      reviwers={element.reviwers}
      price={element.price}
      isNew={element.isNew}
    />
  ))

  return (
    <div className={styles.wrapper}>
      <Title title='Новинки' subtitle={subtitle} />

      <div className={styles.wrapper__content}>{renderItems}</div>
    </div>
  )
}

export default Novelty
