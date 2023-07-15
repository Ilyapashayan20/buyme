import type { FC } from 'react'

import { Ad, Categories, EconomYourTime, FooterImages, Novelty, Product, Promotions } from 'components'

import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Categories />

      <Novelty />

      <EconomYourTime />

      <Ad />

      <Product />

      <Promotions />

      <FooterImages />
    </section>
  )
}

export default Home
