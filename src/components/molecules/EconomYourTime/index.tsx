import type { FC } from 'react'

import styles from './EconomYourTime.module.scss'

const EconomYourTime: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__description}>
          <h3 className={styles.wrapper__container__description__title}>Економ свій час! Замовляй з BuyMe!</h3>
          <p className={styles.wrapper__container__description__subtitle}>Економ свій час! Замовляй з BuyMe!</p>
        </div>
      </div>
    </div>
  )
}

export default EconomYourTime
