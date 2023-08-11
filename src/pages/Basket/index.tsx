import React, { FC, useEffect } from 'react'
import { ProductBasket, ToOrder } from 'components'
import styles from './Basket.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchBasketList } from 'store/features/Basket/basketSlice'

const Basket: FC = () => {
  const dispatch = useAppDispatch()
  const { basketSlice } = useAppSelector(state => state)

  const productsBasketData = basketSlice.data ? basketSlice.data.data : []

  useEffect(() => {
    dispatch(fetchBasketList())
  }, [dispatch])

  const renderProductsBasket = productsBasketData?.map((element: any, index: any) => (
    <ProductBasket data={element} key={index} />
  ))

  return (
    <section className={styles.wrapper}>
      {basketSlice.loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <div className={styles.wrapper__container}>
          {productsBasketData?.length > 0 ? (
            <>
              {' '}
              <h1 className={styles.wrapper__container__title}>Кошик</h1>
              <div className={styles.wrapper__container__basket}>
                <div className={styles.wrapper__container__basket__products}>
                  <header className={styles.wrapper__container__basket__products__header}>
                    <p>Товар</p>
                    <p>Загальна сума</p>
                  </header>

                  <div>{renderProductsBasket}</div>
                </div>

                <ToOrder data={basketSlice.data} />
              </div>
            </>
          ) : (
            <p style={{ textAlign: 'center' }}>Кошик спостереження порожній.</p>
          )}
        </div>
      )}
    </section>
  )
}

export default Basket
