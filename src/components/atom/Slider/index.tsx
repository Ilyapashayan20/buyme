import type { FC } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { LinkIcon, PhoneSecondaryIcon } from 'assets'

import styles from './Slider.module.scss'

const Slider: FC = () => {
  const item = (
    <div className={styles.wrapper}>
      <img className={styles.wrapper__background} width='100%' src='images/homeSlider.png' />

      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__description}>
          <h2 className={styles.wrapper__container__subtitle}>Сучасно & Стильно</h2>

          <h1 className={styles.wrapper__container__title}>Текстиль</h1>

          <p className={styles.wrapper__container__text}>
            Текстильні подушки з принтами зроблять будь-який
            <br />
            будинок затишним саме в тому стилі та кольоровій
            <br />
            гамі, яка потрібна вам
          </p>
        </div>

        <div className={styles.wrapper__container__footer}>
          <div role='button' className={styles.wrapper__container__button}>
            <div className={styles.wrapper__container__button__bg} />

            <p className={styles.wrapper__container__button__text}>ЗАМОВИТИ</p>
          </div>

          <div className={styles.wrapper__container__footer__about}>
            <div className={styles.wrapper__container__footer__item}>
              <div className={styles.wrapper__container__footer__icon}>
                <PhoneSecondaryIcon />
              </div>

              <p className={styles.wrapper__container__text}>0 800 32 32 44</p>
            </div>

            <div className={styles.wrapper__container__footer__item}>
              <div className={styles.wrapper__container__footer__icon}>
                <LinkIcon />
              </div>

              <a className={styles.wrapper__container__text} href='/' target='_blank'>
                www.textil.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const items = new Array(8).fill(item)

  return (
    <>
      <AliceCarousel items={items} mouseTracking disableButtonsControls />
    </>
  )
}

export default Slider
