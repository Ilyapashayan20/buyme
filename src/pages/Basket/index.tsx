import type { FC } from 'react'

import { useResponsive } from 'hooks'
import { Chat, ProductBasket, ToOrder } from 'components'
import { productsBasketData } from 'components/molecules/ProductBasket/utils'

import styles from './Basket.module.scss'

const Basket: FC = () => {
  const renderProductsBasket = productsBasketData.map((element, index) => (
    <ProductBasket product={element} key={index} />
  ))

  const { isTablet } = useResponsive()

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1 className={styles.wrapper__container__title}>Кошик</h1>

        <div className={styles.wrapper__container__basket}>
          <div className={styles.wrapper__container__basket__products}>
            <header className={styles.wrapper__container__basket__products__header}>
              <p>Товар</p>

              <p>Загальна сума</p>
            </header>

            <div>{renderProductsBasket}</div>
          </div>

          <ToOrder />
        </div>
      </div>

      {!isTablet && <Chat />}
    </section>
  )
}

export default Basket
