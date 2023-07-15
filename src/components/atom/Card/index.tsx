import { type FC, useState, useCallback } from 'react'
import classNames from 'classnames'

import { HeartIcon, StarIcon } from 'assets'

import type { TCardProps } from './types'
import styles from './Card.module.scss'

const Card: FC<TCardProps> = ({ image, title, rate, reviwers, price, promotion, oldPrice }) => {
  const starIconsArr = new Array(5).fill('')

  const renderStars = starIconsArr.map((_, index) => (
    <StarIcon key={index} className={classNames({ [styles.active]: index < rate })} />
  ))

  const [isLiked, setLiked] = useState<boolean>(false)

  const onLikeClickCallback = useCallback(() => {
    setLiked(!isLiked)
  }, [isLiked])

  return (
    <div className={styles.wrapper}>
      <img className={styles.wrapper__image} src={image} alt={title} width='100%' height='302px' />

      <HeartIcon
        role='button'
        onClick={onLikeClickCallback}
        className={classNames(styles.wrapper__like, { [styles.wrapper__like__active]: isLiked })}
      />

      <div className={styles.wrapper__description}>
        {!!promotion ? (
          <div className={styles.wrapper__new}>{promotion} %</div>
        ) : (
          <div className={styles.wrapper__new}>Новинки</div>
        )}

        <p className={styles.wrapper__title}>{title}</p>

        <div className={styles.wrapper__rating}>
          <div className={styles.wrapper__stars}>{renderStars}</div>

          <p className={styles.wrapper__reviewers}>{reviwers} відгуків</p>
        </div>

        {!promotion ? (
          <p className={styles.wrapper__price}>{price} ₴ / дроп ціна</p>
        ) : (
          <p className={styles.wrapper__price__promotion}>
            {price} ₴ <span className={styles.wrapper__price__old}>{oldPrice}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Card
