import type { FC } from 'react'

import styles from './Home.module.scss'
import { Categories, Novelty } from 'components'

const Home: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Categories />

      <Novelty />
    </section>
  )
}

export default Home
