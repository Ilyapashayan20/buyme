import type { FC } from 'react'

import { Title, Card, Button } from 'components'
import { promotionItemsData } from 'utils/shared/promotionItemsData'

import styles from './Promotions.module.scss'

const Novelty: FC = () => {
  const subtitle = `Інтернет-магазин BuyMe регулярно проводить масштабний розпродаж товарів. Інколи знижки сягають 75% на одяг, електроніку та інші товари`

  const renderItems = promotionItemsData.map((element, index) => (
    <Card
      key={index}
      image={element.image}
      title={element.title}
      rate={element.rate}
      reviwers={element.reviwers}
      price={element.price}
      promotion={element.promotion}
      oldPrice={element.oldPrice}
    />
  ))

  return (
    <div className={styles.wrapper}>
      <Title title='Акції' subtitle={subtitle} />

      <div className={styles.wrapper__content}>{renderItems}</div>

      <Button className={styles.wrapper__button}>Дивитися усі</Button>
    </div>
  )
}

export default Novelty
