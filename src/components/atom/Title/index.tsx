import type { FC } from 'react'

import type { TTitleProps } from './types'
import styles from './Title.module.scss'

const Title: FC<TTitleProps> = ({ title, subtitle }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapper__title_container}>
      <div className={styles.wrapper__line} />

      <h3 className={styles.wrapper__title}>{title}</h3>

      <div className={styles.wrapper__line} />
    </div>

    <h4 className={styles.wrapper__subtitle}>{subtitle}</h4>
  </div>
)

export default Title
