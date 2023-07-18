import { type FC, useState, useCallback } from 'react'

import { CheckedIcon, HeartIcon, HeartIcon1, NotCheckedIcon } from 'assets'
import { Button, RatingStars } from 'components'

import type { TCardProps } from './types'
import styles from './Card.module.scss'
import { useResponsive } from 'hooks'

const Card: FC<TCardProps> = ({ image, title, rate, reviwers, price, promotion, oldPrice, isCheck = false }) => {
  const { isTablet } = useResponsive()

  const [isLiked, setLiked] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const onLikeClickCallback = useCallback(() => {
    setLiked(!isLiked)
  }, [isLiked])

  const onCheckClickCallback = useCallback(() => {
    setIsChecked(!isChecked)
  }, [isChecked])

  const renderHeartIcon = isLiked ? (
    <HeartIcon role='button' onClick={onLikeClickCallback} className={styles.wrapper__like} />
  ) : (
    <HeartIcon1 role='button' onClick={onLikeClickCallback} className={styles.wrapper__like} />
  )

  const renderCheckedIcon = isChecked ? (
    <CheckedIcon role='button' onClick={onCheckClickCallback} className={styles.wrapper__check} />
  ) : (
    <NotCheckedIcon role='button' onClick={onCheckClickCallback} className={styles.wrapper__check} />
  )

  return (
    <div className={styles.wrapper}>
      <img className={styles.wrapper__image} src={image} alt={title} width='100%' height='auto' />

      {!isCheck ? !isTablet && renderHeartIcon : renderCheckedIcon}

      <div className={styles.wrapper__description}>
        {!!promotion ? (
          <div className={styles.wrapper__new}>{promotion} %</div>
        ) : (
          <div className={styles.wrapper__new}>Новинки</div>
        )}

        <p className={styles.wrapper__title}>{title}</p>

        <div className={styles.wrapper__rating}>
          <RatingStars rate={rate} />

          <p className={styles.wrapper__reviewers}>{reviwers} відгуків</p>
        </div>

        {!promotion ? (
          <p className={styles.wrapper__price}>{price} ₴ / дроп ціна</p>
        ) : (
          <p className={styles.wrapper__price__promotion}>
            {price} ₴ <span className={styles.wrapper__price__old}>{oldPrice}</span>
          </p>
        )}

        {isTablet && (
          <div className={styles.wrapper__buy}>
            <Button className={styles.wrapper__buy__button}>Купити</Button>

            {renderHeartIcon}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
