import type { FC } from 'react'

import { Loader } from 'components'

import styles from './RouteLoader.module.scss'

const RouteLoader: FC = () => (
  <div className={styles.wrapper}>
    <Loader className={styles.wrapper__inner} />
  </div>
)

export default RouteLoader
