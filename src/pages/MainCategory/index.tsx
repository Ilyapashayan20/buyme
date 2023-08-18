import { FC, useEffect, useState } from 'react'
import styles from './MainCategories.module.scss'
import { Button, Card } from 'components'
import Filter from 'components/atom/Filter'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import {
  fetchCategoryData,
  fetchFilterOptions,
  fetchSearchResults,
  setCategoryId,
  setQuery,
} from 'store/features/Search/searchSlice'

const MainCategoriesPage: FC = () => {
  const dispatch = useAppDispatch()
  const searchQuery = new URLSearchParams(location.search).get('search')
  const categoryId = new URLSearchParams(location.search).get('category_id')

  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
    if (searchQuery) {
      dispatch(setCategoryId(undefined))
      dispatch(setQuery(searchQuery))
      dispatch(fetchSearchResults({  page: page }))
      dispatch(fetchFilterOptions({ category_id: categoryId, product_filter: searchQuery }))
    }
    if (categoryId === undefined) {
      //
      dispatch(fetchSearchResults({  page: page }))
    }
    if (categoryId !== null) {
      dispatch(setCategoryId(parseInt(categoryId, 10)))
      dispatch(setQuery(''))

      dispatch(fetchSearchResults({  page: page }))
      dispatch(fetchFilterOptions({ category_id: categoryId, product_filter: '' }))
      dispatch(fetchCategoryData(categoryId))
    }
    if (!searchQuery && !categoryId) {
      dispatch(setQuery(''))

      dispatch(fetchSearchResults({  page: page }))
    }
  }, [dispatch, searchQuery, categoryId])

  const { search } = useAppSelector(state => state)
  const data = search


  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const handleLoadMore = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true)

      if (searchQuery) {
        dispatch(setQuery(searchQuery))

        dispatch(fetchSearchResults({  page: page + 1 })).then(() => {
          setIsLoadingMore(false)
        })
      } else if (categoryId) {
        dispatch(setQuery(''))

        dispatch(fetchSearchResults({ page: page + 1 })).then(() => {
          setIsLoadingMore(false)
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        })
      }

      setPage(prevPage => prevPage + 1)
    }
  }

  const applyFilters = () => {
    setQuery( searchQuery ? searchQuery : '',)
    setPage(1)
    dispatch(fetchSearchResults({ page: page }))
  }

  const category_name = search.category?.name

  let content

  if (data.error) {
    content = <p style={{ textAlign: 'center', color: 'red' }}>An error occurred. Please try again later.</p>
  } else if (data.result.length === 0) {
    content = <p style={{ textAlign: 'center' }}>No products found for your search.</p>
  } else {
    const renderItems = data.result?.map((element: any, index: number) => (
      <Card
        key={index}
        id={element.id}
        image={element.thumb_large}
        title={element.name}
        rate={element.rate}
        reviwers={element.reviwers}
        price={element.price}
      />
    ))

    content = <div className={styles.wrapper__recommend__content}>{renderItems}</div>
  }

  const [openBlockIndex, setOpenBlockIndex] = useState<number | null>(null)

  const renderFilters = data.filters.map((filter: any, index: number) => (
    <Filter openBlockIndex={openBlockIndex} setOpenBlockIndex={setOpenBlockIndex} key={index} filter={filter} />
  ))

  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapper__routes}>
        Головна <span>/</span>
        <span className={styles.wrapper__routes}>Каталог </span>
        <span>/</span>
        <span className={styles.wrapper__routes__last}>
          {searchQuery ? searchQuery : category_name ? category_name : 'Новинки'}
        </span>
      </p>

      <h3 className={styles.wrapper__categories__title}>
        {searchQuery ? searchQuery : category_name ? category_name : 'Новинки'}
      </h3>

      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__filters}>
          {renderFilters}
          <Button onClick={applyFilters} className={styles.wrapper__container__filters__btn1}>
            Застосувати
          </Button>
          <Button className={styles.wrapper__container__filters__btn2}>Очистити фільтри</Button>
        </div>
        {data.loading ? (
          <p style={{ textAlign: 'center', margin: 'auto' }}>Завантаження...</p>
        ) : (
          <div className={styles.wrapper__recommend}>
            <div className={styles.wrapper__recommend__content}>{content}</div>
            {data.result.length > 0 && data.result.length !>= 20 && (
              <div style={{ marginTop: '30px'}}>
                <Button onClick={handleLoadMore} className={styles.loadMoreButton}>
                  {isLoadingMore ? 'Loading...' : 'Завантажити ще'}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MainCategoriesPage
