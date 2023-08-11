import type { FC } from 'react'
import styles from './ProductBasket.module.scss'
import { HeartIcon1, MinusIcon, PlusIcon } from 'assets'
import { useResponsive } from 'hooks'
import { useAppDispatch } from 'hooks/useTypedSelector'
import { removeBasket } from 'store/features/Basket/basketSlice'

const ProductBasket: FC<any> = ({ data }) => {
  const { isMobile } = useResponsive()
  const dispatch = useAppDispatch()

  console.log(data)

  const deleteProduct = () =>{
    dispatch(removeBasket(data.cart_id))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__image}>
          <img width='143px' height='158px'  src={data.product.thumb_large} />
          {isMobile && <h3 style={{ color: '#AB0000', fontWeight: 400 }}>Видалити</h3>}
        </div>
        <div className={styles.wrapper__container__info}>
          <h1 className={styles.wrapper__container__info__title}>
            {data.product.name}
            <br />
            <br />
            <span>{data.product.price} / дроп</span>
          </h1>
          <div className={styles.wrapper__container__info__main}>
            <div className={styles.wrapper__container__info__main__item}>
              <span>Склад:</span>
              <p>{data.option?.[0].warehouse_name}</p>
            </div>
            <div className={styles.wrapper__container__info__main__item}>
              <span>Розмір:</span>
              <p>{data.option?.[0].value}</p>
            </div>
            {!isMobile && (
              <>
                {data.priceType && (
                  <div className={styles.wrapper__container__info__main__item}>
                    <span>Тип ціни:</span>
                    <p>{data.total}</p>
                  </div>
                )}
              </>
            )}
          </div>
          <div className={styles.wrapper__container__info__quantity}>
            <div className={styles.wrapper__container__info__quantity__buttons}>
              <button>
                <MinusIcon />
              </button>
              <div className={styles.wrapper__container__info__quantity__buttons__count}>{data.quantity} шт.</div>
              <button>
                <PlusIcon />
              </button>
            </div>
            <HeartIcon1 />
          </div>
          {isMobile && (
              <>
                {data.priceType && (
                  <div className={styles.wrapper__container__info__main__item}>
                    <span>Всього:</span>
                    <p>{data.total} грн</p>
                  </div>
                )}
              </>
            )}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {!isMobile && (
            <p className={styles.wrapper__container__price} style={{ fontWeight: 700, color: '#ab0000' }}>
              {data.total} грн
            </p>
          )}
        </div>
      </div>
      {!isMobile && <button onClick={deleteProduct} style={{ color: '#AB0000', fontWeight: 400 }}>Видалити</button>}
    </div>
  )
}

export default ProductBasket
