import { FC, useEffect } from 'react'

import styles from './RCategories.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchStockProductsData } from 'store/features/Product/productSlice'
import { Card } from 'components'

const Promotions: FC = () => {
  const dispatch = useAppDispatch()

  

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchStockProductsData())
  }, [dispatch])

  const { stockProducts } = useAppSelector(state => state)

  const categories = stockProducts.data

  const renderProducts = categories.map((element: any, index: number) => (
    <Card
      key={index}
      id={element.id}
      image={element.thumb}
      title={element.name}
      rate={element.special}
      reviwers={element.reviwers}
      price={element.price}
    />
  ))

  return (
    <section className={styles.wrapper}>
      {categories.loading ? (
        <p style={{ textAlign: 'center' }}>loading...</p>
      ) : categories.length > 0 ? (
        <>
          <div className={styles.wrapper__head}>
            <h3 className={styles.wrapper__head__title}>Акції</h3>
          </div>
          <div className={styles.wrapper__items}>{renderProducts}</div>
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>Список Акції порожній.</p>
      )}
    </section>
  )
}

export default Promotions
