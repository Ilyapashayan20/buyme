import type { FC } from 'react'

import { useResponsive } from 'hooks'
import { Ad, Categories, EconomYourTime, FooterImages, Novelty, Product, Promotions, Search, Slider } from 'components'

import styles from './Home.module.scss'

const Home: FC = () => {
  const { isTablet } = useResponsive()

  return (
    <section className={styles.wrapper}>
      {isTablet && <Search />}

      <Slider />

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
