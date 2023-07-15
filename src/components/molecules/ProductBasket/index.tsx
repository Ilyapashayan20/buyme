import type { FC } from 'react'
import styles from './ProductBasket.module.scss'
import {  HeartIcon1, MinusIcon, PlusIcon } from 'assets'

const ProductBasket: FC<any> = ({ product }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__image}>
          <img width='143px' height='158px' alt='soldier' src='images/soldierSecond.png' />
        </div>
        <div className={styles.wrapper__container__info}>
          <h1 className={styles.wrapper__container__info__title}>
            {product.title}
            <br />
            <br />
            <span>{product.price}₴ / дроп</span>
          </h1>
          <div className={styles.wrapper__container__info__main}>
            <div className={styles.wrapper__container__info__main__item}>
              <span>Склад:</span>
              <p>{product.warehouse}</p>
            </div>
            <div className={styles.wrapper__container__info__main__item}>
              <span>Розмір:</span>
              <p>{product.size}</p>
            </div>
            {product.priceType && (
              <div className={styles.wrapper__container__info__main__item}>
                <span>Тип ціни:</span>
                <p>{product.priceType}</p>
              </div>
            )}
          </div>
          <div className={styles.wrapper__container__info__quantity}>
            <div className={styles.wrapper__container__info__quantity__buttons}>
                <button><MinusIcon /></button>
                <div className={styles.wrapper__container__info__quantity__buttons__count}>3 шт.</div>
                <button><PlusIcon /></button>
            </div>
            <HeartIcon1 />
          </div>
        </div>
        <div style={{marginLeft: "auto"}}>
            <p style={{fontWeight: 700, color: "#ab0000"}}>{product.price * 3} грн</p>
        </div>
      </div>
      <h3 style={{color:'#AB0000', fontWeight:400}}>Видалити</h3>
    </div>
  )
}

export default ProductBasket
