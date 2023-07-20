import { type FC, useRef } from 'react'

import classNames from 'classnames'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { useResponsive } from 'hooks'
import { Button, Card, Comment, Title } from 'components'
import {
  ArrowRIghtIcon,
  CartPlusIcon,
  CommentIcon,
  CopyIcon,
  DeliveryIcon,
  HLogoIcon,
  MenuLeftIcon,
  MenuRightIcon,
  TGIcon,
} from 'assets'

import { storeItems } from './utils'
import { itemData } from 'utils/shared/itemsData'
import styles from './Product.module.scss'

const Product: FC = () => {
  const carouselRef = useRef<any>(null)

  const renderCardItems = itemData.map((element, index) => (
    <Card
      key={index}
      image={element.image}
      title={element.title}
      rate={element.rate}
      reviwers={element.reviwers}
      price={element.price}
    />
  ))

  const renderStoreItems1 = storeItems.map((element, index) => (
    <div
      key={index}
      className={classNames(styles.store__item, {
        [styles.store__item__active]: element.isActive,
        [styles.store__item__disabled]: element.isDisabled,
      })}
    >
      <p className={styles.store__item__store_number}>{element.numberOfStore}</p>

      <p className={styles.store__item__number_items}>({element.numberOfItems} шт)</p>
    </div>
  ))

  const renderStoreItems2 = storeItems.map((element, index) =>
    index !== 0 ? (
      <div
        key={index}
        className={classNames(styles.store__item, {
          [styles.store__item__acitve]: element.isActive,
          [styles.store__item__disabled]: element.isDisabled,
        })}
      >
        <p className={styles.store__item__store_number}>{element.numberOfStore}</p>

        <p className={styles.store__item__number_items}>({element.numberOfItems} шт ) </p>
      </div>
    ) : null
  )

  const { isTablet } = useResponsive()

  const sliderItems = [
    <img src='images/boots.png' width='100%' height='100%' />,
    <img src='images/boots.png' width='100%' height='100%' />,
    <img src='images/boots.png' width='100%' height='100%' />,
  ]

  const handleGoToClick = (slideIndex: number) => {
    if (carouselRef.current) {
      carouselRef.current.slideTo(slideIndex)
    }
  }

  const renderSliderBottom = sliderItems.map((element, index) => (
    <div role='button' onClick={() => handleGoToClick(index)} className={classNames(styles.slider__bottom)} key={index}>
      {element}
    </div>
  ))

  const CustomNextButton = () => (
    <div className={classNames(styles.slider__custom__next__button, styles.slider__custom__buttons)}>
      <MenuLeftIcon />
    </div>
  )

  const CustomPrevButton = () => (
    <div className={classNames(styles.slider__custom__prev__button, styles.slider__custom__buttons)}>
      <MenuRightIcon />
    </div>
  )

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.wrapper__routes}>
        Каталог товарів <span>/</span>Військторг<span>/</span> Тактичне взуття <span>/</span>
        <span className={styles.wrapper__routes__last}>Тактичні кросівки scooter</span>
      </h3>

      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__top}>
          <div className={styles.wrapper__container__slider}>
            <AliceCarousel
              ref={carouselRef}
              renderPrevButton={() => <CustomPrevButton />}
              renderNextButton={() => <CustomNextButton />}
              items={sliderItems}
              mouseTracking
            />

            {!isTablet && <div className={styles.wrapper__container__slider__bottom}>{renderSliderBottom}</div>}
          </div>

          <div className={styles.wrapper__container__right}>
            <h3 className={styles.wrapper__container__right__title}>Тактичні кросівки scooter</h3>

            <p className={styles.wrapper__container__right__code}>Код: 12031</p>

            <p className={styles.wrapper__container__right__price}>
              2990 ₴ <span className={styles.wrapper__container__right__price__old}>2990 ₴</span>
            </p>

            <pre className={styles.wrapper__container__right__in_store}>
              2900 ₴ <span> Замовте 4 шт.</span>
            </pre>

            <div className={styles.wrapper__store}>
              <div className={styles.wrapper__store__title_container}>
                <h3 className={styles.wrapper__store__title}>Основний склад</h3>

                {isTablet && <p className={styles.wrapper__store__subtitle}>Таблиця розмірів</p>}
              </div>

              <div className={styles.store}>{renderStoreItems1}</div>

              {!isTablet && <p className={styles.wrapper__store__subtitle}>Таблиця розмірів</p>}
            </div>

            <div className={styles.wrapper__store}>
              <div className={styles.wrapper__store__title_container}>
                <h3 className={styles.wrapper__store__title}>Додатковий склад</h3>
              </div>

              <div className={styles.store}>{renderStoreItems2}</div>
            </div>

            <div className={styles.wrapper__container__right__buttons}>
              <Button LeftIcon={CartPlusIcon}>Додати в кошик</Button>

              <Button isTransparent LeftIcon={TGIcon}>
                Зв‘язатися з менеджером
              </Button>
            </div>

            <div className={styles.wrapper__container__description}>
              <h3 className={styles.wrapper__container__description__title}>Опис</h3>

              <p className={styles.wrapper__container__description__text}>
                - Натуральний нубук
                <br />
                -Має мембранну технологію
                <br />
                - Висока повітропроникність (захист від поту)
                <br />
                -Зносостійкий
                <br />
                - Маса ~1000 г
                <br />
                <br />
                Технологія підошви з поліуретану та гуми подвійної щільності. М'яка та легка проміжна підошва, гумова
                підошва з високим опором ковзанню. Завдяки спеціально розробленій базовій конструкції він забезпечує
                чудову мобільність та стійкість користувачеві під час підйому по місцевості або подолання перешкод
              </p>

              <Button isTransparent LeftIcon={CopyIcon}>
                Копіювати опис
              </Button>
            </div>

            <div className={styles.wrapper__container__footer}>
              <div className={styles.wrapper__container__footer__comments}>
                <div className={styles.wrapper__container__footer__comments__head}>
                  <p className={styles.wrapper__container__footer__comments__head__title}>
                    <CommentIcon />
                    Відгуки (2)
                  </p>

                  <p className={styles.wrapper__container__footer__comments__head__link}>
                    Дивитися усі <ArrowRIghtIcon />
                  </p>
                </div>

                <div className={styles.wrapper__container__footer__comments__container}>
                  <Comment
                    name='Оксана'
                    date='03.06.2023'
                    rate={4}
                    text='Актуальний опис та фото. Ціна відповідає якості. Рекомендую!'
                  />

                  <Comment
                    name='Оксана'
                    date='03.06.2023'
                    rate={4}
                    text='Актуальний опис та фото. Ціна відповідає якості. Рекомендую!'
                  />

                  <Comment
                    name='Оксана'
                    date='03.06.2023'
                    rate={4}
                    text='Актуальний опис та фото. Ціна відповідає якості. Рекомендую!'
                  />
                </div>
              </div>
            </div>
            <div className={styles.wrapper__container__footer__delivery}>
              <p className={styles.wrapper__container__footer__comments__head__title}>
                <DeliveryIcon />
                Доставка, оплата та повернення
              </p>

              <p className={styles.wrapper__container__footer__comments__head__subtitle}>
                <HLogoIcon />
                Нова Пошта
              </p>

              <Button isTransparent>Дивитись усе</Button>
            </div>
          </div>
        </div>

        <div className={styles.wrapper__container__bottom}>
          <Title title='Вам також може сподобатись' />

          <div className={styles.wrapper__container__bottom__items}>{renderCardItems}</div>
        </div>
      </div>
    </section>
  )
}

export default Product
