import type { FC } from 'react'

import { GiftIcon } from 'assets'

import styles from './Ad.module.scss'

const Ad: FC = () => (
  <div className={styles.wrapper}>
    <GiftIcon />

    <h3 className={styles.wrapper__title}>50% Знижка на улюблені товари</h3>

    <p className={styles.wrapper__subtitle}>Варто поспішити, оскільки кількість обмежена</p>
  </div>
)

export default Ad
