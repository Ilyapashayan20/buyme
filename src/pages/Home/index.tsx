import { FC, useEffect } from 'react'
import { useResponsive } from 'hooks'
import {
  Ad,
  Categories,
  Chat,
  EconomYourTime,
  FooterImages,
  Novelty,
  ProductItem,
  Promotions,
  Search,
  Slider,
} from 'components'

import styles from './Home.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchCategoryData } from 'store/features/Category/categorySlice'
import { fetchNewProductsData, fetchProductById, fetchStockProductsData } from 'store/features/Product/productSlice'

const Home: FC = () => {
  const { isTablet } = useResponsive()


  const dispatch = useAppDispatch()
  const { rootCategory,newProducts,productById,stockProducts } = useAppSelector(state => state)


  useEffect(() => {
    dispatch(fetchCategoryData())
    dispatch(fetchNewProductsData())
    dispatch(fetchProductById(9242))
    dispatch(fetchStockProductsData())
  }, [dispatch])

  return (
    <section className={styles.wrapper}>
      {isTablet && <Search />}

      <Slider />

      {!isTablet && <Chat />}

      <Categories data={rootCategory} />

      <Novelty data={newProducts} />

      <EconomYourTime />

      <Ad />

      <ProductItem data={productById.data} />

      <Promotions data={stockProducts}  />

      <FooterImages />
    </section>
  )
}

export default Home
