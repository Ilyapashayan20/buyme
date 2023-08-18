import { useEffect, type FC } from 'react'

import { RoutesWrapper } from 'router'
import { Footer, Header, MobileNavBar } from 'components'

import styles from './PageLayout.module.scss'
import { useResponsive } from 'hooks'
import { useAppDispatch } from 'hooks/useTypedSelector'
import { fetchBasketList } from 'store/features/Basket/basketSlice'
import { fetchWatchList } from 'store/features/Watchlist/watchListSlice'

const PageLayout: FC = () => {
  const { isTablet } = useResponsive()

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchBasketList())
    dispatch(fetchWatchList())
  },[dispatch])


  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.wrapper__container}>
        <RoutesWrapper />
      </div>

      <Footer />

      {isTablet && <MobileNavBar />}
    </main>
  )
}

export default PageLayout
