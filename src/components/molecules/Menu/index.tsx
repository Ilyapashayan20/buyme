import { type FC, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import { uniqueId } from 'lodash'
import { useLockBodyScroll, useOnClickOutside } from 'hooks'
import { ArrowRIghtIcon, CloseIcon, ListIcon } from 'assets'

import { catalogueData, catalogueItem } from './utils'
import styles from './Menu.module.scss'

const Menu: FC = () => {
  const [droped, setDroped] = useState<boolean>(false)
  const [renderItem1, setRenderItem1] = useState<any>()
  const [renderItem2, setRenderItem2] = useState<any>()
  const [renderItem3, setRenderItem3] = useState<any>()
  const [catalogNumber, setCatalogNumber] = useState<number>(0)

  const handleDropping = () => setDroped(!droped)

  const handleCatalogNumberChanging = (id: number) => setCatalogNumber(id)

  const ref = useRef(null)

  useOnClickOutside(ref, () => setDroped(false))
  useLockBodyScroll(!droped)

  const renderCatalogItem = catalogueItem.map(({ Icon, text }, index) => (
    <div
      key={uniqueId()}
      onMouseOver={() => handleCatalogNumberChanging(index)}
      onMouseOut={() => handleCatalogNumberChanging(0)}
      className={classNames(styles.wrapper__dropdown__left__item, {
        [styles.wrapper__dropdown__left__item__active]: index === catalogNumber,
      })}
    >
      <div>
        <Icon />

        <p className={styles.wrapper__dropdown__left__item__text}>{text}</p>
      </div>

      <ArrowRIghtIcon />
    </div>
  ))

  useEffect(() => {
    catalogueData.map((element, index, array) => {
      setRenderItem1(
        array[catalogNumber][0].map(({ text, isRed }) => (
          <p
            key={uniqueId()}
            className={classNames(styles.wrapper__dropdown__right__text, {
              [styles.wrapper__dropdown__right__text__red]: isRed,
            })}
          >
            {text}
          </p>
        ))
      )

      setRenderItem2(
        array[catalogNumber][1].map(({ text, isRed }) => (
          <p
            key={uniqueId()}
            className={classNames(styles.wrapper__dropdown__right__text, {
              [styles.wrapper__dropdown__right__text__red]: isRed,
            })}
          >
            {text}
          </p>
        ))
      )

      setRenderItem3(
        array[catalogNumber][2].map(({ text, isRed }) => (
          <p
            key={uniqueId()}
            className={classNames(styles.wrapper__dropdown__right__text, {
              [styles.wrapper__dropdown__right__text__red]: isRed,
            })}
          >
            {text}
          </p>
        ))
      )
    })
  }, [catalogNumber])

  return (
    <div className={styles.wrapper}>
      <button onClick={handleDropping} className={styles.wrapper__catalog}>
        {droped ? <CloseIcon /> : <ListIcon />}

        <p>Каталог</p>
      </button>

      <div className={classNames(styles.wrapper__container, { [styles.wrapper__dropdown__droped]: droped })}>
        <div ref={ref} className={styles.wrapper__dropdown}>
          <div className={styles.wrapper__dropdown__left}>
            <h2 className={styles.wrapper__dropdown__left__title}>Категорії</h2>

            <div>{renderCatalogItem}</div>
          </div>

          <div className={styles.wrapper__dropdown__right}>
            <div className={styles.wrapper__dropdown__right__item}>{renderItem1}</div>

            <div className={styles.wrapper__dropdown__right__item}>{renderItem2}</div>

            <div className={styles.wrapper__dropdown__right__item}>{renderItem3}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
