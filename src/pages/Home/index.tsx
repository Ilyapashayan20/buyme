import type { FC } from 'react'

import { useResponsive } from 'hooks'
import {
  Ad,
  Categories,
  Chat,
  EconomYourTime,
  FooterImages,
  Novelty,
  ProductItem,
  Promotions,
  Search,
  Slider,
} from 'components'

import styles from './Home.module.scss'

const Home: FC = () => {
  const { isTablet } = useResponsive()

  return (
    <section className={styles.wrapper}>
      {isTablet && <Search />}

      <Slider />

      {!isTablet && <Chat />}

      <Categories />

      <Novelty />

      <EconomYourTime />

      <Ad />

      <ProductItem />

      <Promotions />

      <FooterImages />
    </section>
  )
}

export default Home
