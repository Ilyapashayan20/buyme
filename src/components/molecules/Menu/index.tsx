import { type FC, useState, useRef } from 'react'
import classNames from 'classnames'

import { ArrowRIghtIcon, CloseIcon, ListIcon, NotFoundImage } from 'assets'

import styles from './Menu.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchCategoryTreeData } from 'store/features/Category/categorySlice'
import { useLockBodyScroll, useOnClickOutside } from 'hooks'

const Menu: FC = () => {
  const [droped, setDroped] = useState<boolean>(false)
  const [renderItem2, setRenderItem2] = useState<any>()
  const ref = useRef(null)

  useOnClickOutside(ref, () => setDroped(false))
  useLockBodyScroll(!droped)

  const dispatch = useAppDispatch()
  const { categoryTree } = useAppSelector(state => state)
  const catalogItems = categoryTree.data ? categoryTree.data : []
  const [activeCategory, setActiveCategory] = useState<string | null>(null) // Track active category

  const handleDropping = () => {
    dispatch(fetchCategoryTreeData())
    setDroped(true)
  }

  const handleDroppingClose = () => {
    setDroped(false)
  }

  const handleMouseOverCategory = (category: any) => {
    setRenderItem2(category.childrens)
    setActiveCategory(category.id)
  }

  const renderCatalogItem = catalogItems.map((element: any, index: number) => (
      <a href={`/app/categories?category_id=${element.id}`}
        key={index}
        className={classNames(styles.wrapper__dropdown__left__item, {
          [styles.wrapper__dropdown__left__item__active]: activeCategory === element.id,
        })}
        onMouseOver={() => handleMouseOverCategory(element)}
      >
        <div>
          <img src={element.icon || NotFoundImage} />
          <p className={styles.wrapper__dropdown__left__item__text}>{element.name}</p>
        </div>
        <ArrowRIghtIcon />
      </a>
  ))

  return (
    <div className={styles.wrapper}>
      {droped ? (
        <button ref={ref} onClick={handleDroppingClose} className={styles.wrapper__catalog}>
          <CloseIcon />
          <p>Каталог</p>
        </button>
      ) : (
        <button ref={ref} onClick={handleDropping} className={styles.wrapper__catalog}>
          <ListIcon />
          Каталог
        </button>
      )}

      <div className={classNames(styles.wrapper__container, { [styles.wrapper__dropdown__droped]: droped })}>
        <div ref={ref} className={styles.wrapper__dropdown}>
          <div className={styles.wrapper__dropdown__left}>
            <h2 className={styles.wrapper__dropdown__left__title}>Категорії</h2>

            <div>{renderCatalogItem}</div>
          </div>

          <div className={styles.wrapper__dropdown__right}>
            <div className={styles.wrapper__dropdown__right__item}>
              {renderItem2 &&
                renderItem2.map((data: any, index: number) => (
                  <div
                    style={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'column', gap: '10px' }}
                    key={index}
                  >
                    <a
                      href={`/app/categories?category_id=${data.id}`}
                      style={{ cursor: 'pointer', color: '#ab0000', fontWeight: 400, fontSize: '16px' }}
                    >
                      {data.name}
                    </a>
                    {data.childrens?.map((child: any, index: number) => (
                      <a
                        href={`/app/categories?category_id=${child.id}`}
                        style={{ cursor: 'pointer', color: '#4c5563', fontWeight: 300, fontSize: '16px' }}
                        key={index}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
