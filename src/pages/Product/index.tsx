import { type FC, useRef, useEffect } from 'react'

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

import styles from './Product.module.scss'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchProductById } from 'store/features/Product/productSlice'
import { fetchStockProductsData } from 'store/features/Product/productSlice'
import { fetchProductReviewsById } from 'store/features/Product/productReviewsSlice'
import { addBasket } from 'store/features/Basket/basketSlice'

const Product: FC<any> = () => {
  const dispatch = useAppDispatch()

  const { productById, stockProducts, productReviews } = useAppSelector(state => state)


  const product = productById.data
  const filteredDescription = product.description?.replace(/<p>&nbsp;<\/p>/g, '')
  const mainWarehouse = product?.allOptions?.[0]?.warehouses?.[0]?.options || []
  const modifiedWarehouses = mainWarehouse.map((warehouse: any, index: number) => ({
    ...warehouse,
    isActive: index === 0,
  }))

  const AdditionalWarehouse = product?.allOptions?.[0]?.warehouses?.[0]?.options || []
  const modifiedAdditionalWarehouses = AdditionalWarehouse.map((warehouse: any, index: number) => ({
    ...warehouse,
    isActive: index === 0,
  }))



  const { productId } = useParams()
  const id = Number(productId)

  const addProductBasket = () => {
    const userDataString = localStorage.getItem('userData');
    
    if (userDataString) { 
      const userData = JSON.parse(userDataString);
  
      const customerId = userData.customer_id;
  
      const payload = {
        customer_id: customerId,
        product_id: id, 
        options: {
          0: 81395,
          1: 81396,
          warehouse_id: 0,
        },
        quantity: 1,
      };
  
      dispatch(addBasket(payload));
    } else {
      console.error('userData is not available in localStorage.');
    }
  };
  
  useEffect(() => {
    dispatch(fetchProductById(id))
    dispatch(fetchStockProductsData())
    dispatch(fetchProductReviewsById(id))
    window.scrollTo(0, 0)
  }, [dispatch])

  const carouselRef = useRef<any>(null)

  const renderCardItems = stockProducts.data.map((element: any, index: number) => (
    <a href={`/product/${element.id}`}>
      <Card
        key={index}
        image={element.thumb}
        title={element.name}
        rate={element.special}
        reviwers={element.reviwers}
        price={element.price}
      />
    </a>
  ))

  const renderMainStoreItems = modifiedWarehouses.map((element: any, index: number) => (
    <div
      key={index}
      className={classNames(styles.store__item, {
        [styles.store__item__active]: element.isActive,
      })}
    >
      <p className={styles.store__item__store_number} style={{ textAlign: 'center' }}>
        {element.name}
      </p>

      <p className={styles.store__item__number_items}>({element.quantity} шт)</p>
    </div>
  ))

  const renderAdditionalStoreItems = modifiedAdditionalWarehouses.map((element: any, index: number) =>
    index !== 0 ? (
      <div
        key={index}
        className={classNames(styles.store__item, {
          [styles.store__item__acitve]: element.isActive,
        })}
      >
        <p className={styles.store__item__store_number} style={{ textAlign: 'center' }}>
          {element.name}
        </p>

        <p className={styles.store__item__number_items}>({element.quantity} шт ) </p>
      </div>
    ) : null
  )

  const renderProductReviews = productReviews.data.map((element:any, index:number)=>(
    <Comment 
    key={index}
    name={element.author}
    date={element.date}
    rate={element.rating}
    text={element.text}
    />
  ))

  const { isTablet } = useResponsive()

  const sliderItems = product.image?.lenght> 0 ? product.image : Array(3).fill(
    <img src={product.table_size} width='100%' height='100%' />,)


  const handleGoToClick = (slideIndex: number) => {
    if (carouselRef.current) {
      carouselRef.current.slideTo(slideIndex)
    }
  }

  const renderSliderBottom = sliderItems?.map((element: any, index: any) => (
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

  return productById.loading ? (
    <p style={{ textAlign: 'center' }}>loading...</p>
  ) : (
    <section className={styles.wrapper}>
      <h3 className={styles.wrapper__routes}>
        Каталог товарів <span>/</span>Військторг<span>/</span> Тактичне взуття <span>/</span>
        <span className={styles.wrapper__routes__last}>{product.name}</span>
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
            <h3 className={styles.wrapper__container__right__title}>{product.name}</h3>

            <p className={styles.wrapper__container__right__code}>Код: {product.model}</p>

            <p className={styles.wrapper__container__right__price}>
              {product.special ? (
                <>
                  {product.special} {' '}
                  <span className={styles.wrapper__container__right__price__old}>{product.price} </span>
                </>
              ) : (
                <>{product.price} </>
              )}
            </p>

            <pre className={styles.wrapper__container__right__in_store}>
              {product.special ? (
                <>
                  {product.special}  <span> Замовте {product?.allOptions?.[0]?.warehouses?.[0]?.quantity} шт.</span>
                </>
              ) : (
                <>
                  {product.price}  <span> Замовте {product?.allOptions?.[0]?.warehouses?.[0]?.quantity} шт.</span>
                </>
              )}
            </pre>

            <div className={styles.wrapper__store}>
              <div className={styles.wrapper__store__title_container}>
                <h3 className={styles.wrapper__store__title}>Основний склад</h3>

                {isTablet && <p className={styles.wrapper__store__subtitle}>Таблиця розмірів</p>}
              </div>

              <div className={styles.store}>{renderMainStoreItems}</div>

              {!isTablet && <p className={styles.wrapper__store__subtitle}>Таблиця розмірів</p>}
            </div>

            <div className={styles.wrapper__store}>
              <div className={styles.wrapper__store__title_container}>
                {modifiedAdditionalWarehouses.length === 0 ? (
                  <h3 className={styles.wrapper__store__title}>Додатковий склад</h3>
                ) : (
                  <></>
                )}
              </div>

              <div className={styles.store}>{renderAdditionalStoreItems}</div>
            </div>

            <div className={styles.wrapper__container__right__buttons}>
              <Button onClick={addProductBasket} LeftIcon={CartPlusIcon}>Додати в кошик</Button>

              <Button isTransparent LeftIcon={TGIcon}>
                Зв‘язатися з менеджером
              </Button>
            </div>

            <div className={styles.wrapper__container__description}>
              <h3 className={styles.wrapper__container__description__title}>Опис</h3>

              <p className={styles.wrapper__container__description__text}>
                <div dangerouslySetInnerHTML={{ __html: filteredDescription }} />
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
                    Відгуки ({productReviews.data?.length})
                  </p>

                  <p className={styles.wrapper__container__footer__comments__head__link}>
                    Дивитися усі <ArrowRIghtIcon />
                  </p>
                </div>

                <div className={styles.wrapper__container__footer__comments__container}>
                {productReviews.data.length > 0 && <> {renderProductReviews}</>}

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
