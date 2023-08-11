import type { FC } from 'react'

import { CheckedIcon } from 'assets'
import { Button, RatingStars } from 'components'

import styles from './ProductItem.module.scss'


const ProductItem: FC <any> = ({data}) => {


return(
  <div className={styles.wrapper}>
    <div className={styles.wrapper__image}>
      <img width='580px' height='624px' alt='soldier' src={data.table_size} />
    </div>

    <div className={styles.wrapper__description}>
      <h3 className={styles.wrapper__description__title}>{data.name}</h3>

      <RatingStars rate={4} isRed className={styles.wrapper__description__stars} />

      <h4 className={styles.wrapper__description__price}>{data.price} ₴ / дроп ціна</h4>

      <p className={styles.wrapper__description__text}>
        Костюм складається з сорочки Ubacs та штанів. До комплекту також входять запатентовані знімні наколінники
        та налокітники AirFlex Combat
      </p>

      <div className={styles.wrapper__description__about}>
        <div>
          <div className={styles.wrapper__description__about__item}>
            <CheckedIcon />

            <p className={styles.wrapper__description__about__item__text}>Бавовняна основа</p>
          </div>

          <div className={styles.wrapper__description__about__item}>
            <CheckedIcon />

            <p className={styles.wrapper__description__about__item__text}>Водостійка тканина</p>
          </div>
        </div>

        <div>
          <div className={styles.wrapper__description__about__item}>
            <CheckedIcon />

            <p className={styles.wrapper__description__about__item__text}>Продуманий крій</p>
          </div>

          <div className={styles.wrapper__description__about__item}>
            <CheckedIcon />

            <p className={styles.wrapper__description__about__item__text}>Перевірена якість</p>
          </div>
        </div>
      </div>

      <Button className={styles.wrapper__description__button}>Купити</Button>
    </div>
  </div>
)
}

export default ProductItem
