import { FC, useEffect, useState } from 'react'
import styles from './Placing.module.scss'
import { Button, ToOrder } from 'components'
import classNames from 'classnames'
import { ArrowBottomIcon, LockIcon, UnlockIcon } from 'assets'
import { useResponsive } from 'hooks'
import { fetchBasketList } from 'store/features/Basket/basketSlice'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { Link } from 'react-router-dom'

const Placing: FC = () => {
  const [activeStep, setActiveStep] = useState(1)
  const { isMobile } = useResponsive()

  const dispatch = useAppDispatch()
  const { basketSlice } = useAppSelector(state => state)

  const productsBasketData = basketSlice.data ? basketSlice.data.data : []

  useEffect(() => {
    dispatch(fetchBasketList())
  }, [dispatch])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1 className={styles.wrapper__container__title}>Оформлення замовлення</h1>
        <div className={styles.wrapper__container__basket}>
          <div className={styles.wrapper__container__basket__products}>
            <header className={styles.wrapper__container__basket__products__header}>
              <p>Ваше замовлення</p>
            </header>
            <div>
              {productsBasketData?.map((element: any, index: any) => (
                <div   key={index} className={styles.wrapper__container__basket__products__product}>
                  <div>
                    {!isMobile ? (
                      <img width='143px' height='158px' alt='soldier' src={element.product.thumb_large} />
                    ) : (
                      <img width='64px' height='64px' alt='soldier' src={element.product.thumb_large} />
                    )}
                  </div>
                  <div className={styles.wrapper__container__basket__products__product__info}>
                  <Link to={`/product/${element.product.id}`} className={styles.wrapper__container__basket__products__product__info__title}>
                      {element.product.name}
                    </Link>
                    <p className={styles.wrapper__container__basket__products__product__info__quantity}>Ще {element.quantity} товари</p>
                    <p className={styles.wrapper__container__basket__products__product__info__price}>{element.product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {!isMobile ? (
              <div className={styles.wrapper__container__basket__products__stepper}>
                <div
                  onClick={() => handleStepClick(1)}
                  className={classNames(styles.wrapper__container__basket__products__stepper__step__1)}
                >
                  <div
                    className={classNames(styles.wrapper__container__basket__products__stepper__step__1__block, {
                      [styles['wrapper__container__basket__products__stepper__step__1__block__active']]:
                        activeStep === 1,
                    })}
                  >
                    Доставка
                  </div>{' '}
                </div>
                <div
                  onClick={() => handleStepClick(2)}
                  className={classNames(styles.wrapper__container__basket__products__stepper__step__1)}
                >
                  <div
                    className={classNames(styles.wrapper__container__basket__products__stepper__step__1__block, {
                      [styles['wrapper__container__basket__products__stepper__step__1__block__active']]:
                        activeStep === 2,
                    })}
                  >
                    Оплата
                  </div>{' '}
                </div>
                <div
                  onClick={() => handleStepClick(3)}
                  className={classNames(styles.wrapper__container__basket__products__stepper__step__1)}
                >
                  <div
                    className={classNames(styles.wrapper__container__basket__products__stepper__step__1__block, {
                      [styles['wrapper__container__basket__products__stepper__step__1__block__active']]:
                        activeStep === 3,
                    })}
                  >
                    Особисті дані
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.wrapper__container__basket__products__stepper__mobile}>
                <div
                  onClick={() => handleStepClick(1)}
                  className={classNames(styles.wrapper__container__basket__products__stepper__mobile__step__1)}
                >
                  <div
                    className={classNames(
                      styles.wrapper__container__basket__products__stepper__mobile__step__1__container,
                      {
                        [styles['wrapper__container__basket__products__stepper__mobile__step__1__container__active']]:
                          activeStep === 1,
                      }
                    )}
                  >
                    <div
                      className={classNames(
                        styles.wrapper__container__basket__products__stepper__mobile__step__1__container__lock
                      )}
                    >
                      {activeStep !== 1 ? <LockIcon /> : <UnlockIcon />}
                    </div>
                    <span>Крок 1</span>
                    <p>Доставка</p>
                  </div>
                  <div className={styles.wrapper__container__basket__products__stepper__mobile__step__1__line1}></div>
                </div>
                <div
                  onClick={() => handleStepClick(2)}
                  className={classNames(styles.wrapper__container__basket__products__stepper__mobile__step__1)}
                >
                  <div
                    className={classNames(
                      styles.wrapper__container__basket__products__stepper__mobile__step__1__container,
                      {
                        [styles['wrapper__container__basket__products__stepper__mobile__step__1__container__active']]:
                          activeStep === 2,
                      }
                    )}
                  >
                    <div
                      className={classNames(
                        styles.wrapper__container__basket__products__stepper__mobile__step__1__container__lock
                      )}
                    >
                      {activeStep !== 2 ? <LockIcon /> : <UnlockIcon />}
                    </div>
                    <span>Крок 2</span>
                    <p>Оплата</p>
                  </div>
                  <div className={styles.wrapper__container__basket__products__stepper__mobile__step__1__line2}></div>
                </div>
                <div
                  onClick={() => handleStepClick(3)}
                  className={classNames(styles.wrapper__container__basket__products__stepper__mobile__step__3)}
                >
                  <div
                    className={classNames(
                      styles.wrapper__container__basket__products__stepper__mobile__step__3__container,
                      {
                        [styles['wrapper__container__basket__products__stepper__mobile__step__3__container__active']]:
                          activeStep === 3,
                      }
                    )}
                  >
                    <div
                      className={classNames(
                        styles.wrapper__container__basket__products__stepper__mobile__step__1__container__lock
                      )}
                    >
                      {activeStep !== 3 ? <LockIcon /> : <UnlockIcon />}
                    </div>
                    <span>Крок 3</span>
                    <p>Особисті дані</p>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.wrapper__container__basket__products__stepper__container}>
              {activeStep === 1 && (
                <div className={styles.wrapper__container__basket__products__stepper__container__step_1}>
                  <div className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}>
                    <label>Оберіть спосіб доставки</label>
                    <input type='text' />
                    <button>
                      {' '}
                      <ArrowBottomIcon />
                    </button>
                  </div>
                  <div className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}>
                    <label>Оберіть спосіб доставки</label>
                    <input type='text' />
                    <button>
                      {' '}
                      <ArrowBottomIcon />
                    </button>
                  </div>
                  <div className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}>
                    <label>Оберіть спосіб доставки</label>
                    <input type='text' />
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <div
                      className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}
                    >
                      <label>Оберіть спосіб доставки</label>
                      <input type='text' />
                    </div>
                    <div
                      className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}
                    >
                      <label>Оберіть спосіб доставки</label>
                      <input type='text' />
                    </div>
                  </div>
                  <Button className={styles.wrapper__container__basket__products__stepper__container__step_1__btn}>
                    Перейти далі
                  </Button>
                </div>
              )}
              {activeStep === 2 && (
                <div className={styles.wrapper__container__basket__products__stepper__container__step_1}>
                  <div
                    style={{ marginBottom: '48px' }}
                    className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}
                  >
                    <label>Оберіть спосіб доставки</label>
                    <input type='text' />
                  </div>

                  <Button className={styles.wrapper__container__basket__products__stepper__container__step_1__btn}>
                    Перейти далі
                  </Button>
                </div>
              )}
              {activeStep === 3 && (
                <div className={styles.wrapper__container__basket__products__stepper__container__step_1}>
                  <p className={styles.wrapper__container__basket__products__stepper__container__step_1__title}>
                    Поле, обов’язкове для заповнення
                  </p>
                  <div className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}>
                    <label>Ім’я отримувача</label>
                    <input type='text' placeholder='Андрій' />
                  </div>
                  <div className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}>
                    <label>Прізвище *</label>
                    <input type='text' placeholder='Коваленко' />
                  </div>
                  <div className={styles.wrapper__container__basket__products__stepper__container__step_1__input_block}>
                    <label>Телефон *</label>
                    <input placeholder='+38 (0__) ___-__-__' type='tel' />
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isMobile && <ToOrder data={basketSlice.data} />}
        </div>
      </div>
    </section>
  )
}

export default Placing
