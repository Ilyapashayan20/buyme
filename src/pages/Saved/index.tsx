import type { FC } from 'react'

import { Card } from 'components'
import { savedItems } from 'utils/shared/savedItems'

import styles from './Saved.module.scss'

const Saved: FC = () => {
  const renderItems = savedItems.map((element, index) => (
    <Card
      key={index}
      image={element.image}
      title={element.title}
      rate={element.rate}
      reviwers={element.reviwers}
      price={element.price}
      promotion={element.promotion}
      oldPrice={element.oldPrice}
      isCheck
    />
  ))

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__head}>
        <h3 className={styles.wrapper__head__title}>Вподобані товари</h3>

        <p className={styles.wrapper__head__subtitle}>Видалити обрані</p>
      </div>

      <div className={styles.wrapper__items}>{renderItems}</div>
    </section>
  )
}

export default Saved
