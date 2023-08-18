import { FC, useEffect } from 'react'


import styles from './CategoriesPage.module.scss'
import { fetchCategoryData } from 'store/features/Category/categorySlice'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { Link } from 'react-router-dom'

const CategoriesPage: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    
    dispatch(fetchCategoryData())
  }, [dispatch])

  const { rootCategory } = useAppSelector(state => state)

  const categories = rootCategory.data

  const renderCategories = categories.map((element:any, index:number) => (
    <Link to={`/app/categories?category_id=${element.id}`} >

    <div className={styles.wrapper__categories__item} key={index}>
      <div className={styles.wrapper__categories__item__image_container}>
        <img src={element.thumb_large} alt='category' width='100%' height='100%' />
      </div>

      <p className={styles.wrapper__categories__item__title}>{element.name}</p>
    </div>
    </Link>
  ))

 
  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapper__routes}>
        Головна /<span className={styles.wrapper__routes__last}>Каталог</span>
      </p>

      <h3 className={styles.wrapper__categories__title}>Каталог</h3>

      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__categories}>{renderCategories}</div>
      </div>
    </div>
  )
}

export default CategoriesPage
