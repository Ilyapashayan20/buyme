import { FC, useEffect } from 'react'

import { Card } from 'components'

import styles from './Saved.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchWatchList } from 'store/features/Watchlist/watchListSlice'

const Saved: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWatchList())
  }, [dispatch])

  const { watchlistSLice } = useAppSelector(state => state)

  const savedItems = watchlistSLice.data

  const renderItems = savedItems.map((element: any, index: number) => (
    <Card
      key={index}
      id={element.id}
      image={element.thumb}
      title={element.title}
      rate={element.rate}
      reviwers={element.reviwers}
      price={element.price}
      promotion={element.promotion}
      oldPrice={element.oldPrice}
      saved={true}
    />
  ))

  return (
    <section className={styles.wrapper}>
      
      {watchlistSLice.loading ? (
        <p style={{ textAlign: 'center' }}>loading...</p>
      ) : savedItems.length > 0 ? (
        <>
          <div className={styles.wrapper__head}>
            <h3 className={styles.wrapper__head__title}>Вподобані товари</h3>
            <p className={styles.wrapper__head__subtitle}>Видалити обрані</p>
          </div>
          <div className={styles.wrapper__items}>{renderItems}</div>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>Список спостереження порожній.</p>
      )}
    </section>
  )
}

export default Saved
