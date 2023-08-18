import React, { FC } from 'react'
import styles from './Filter.module.scss'
import { TFilterProps } from './type'
import { ChervonDownIcon } from 'assets'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchFilterOption, removeFilterOption, setFilterOptions } from 'store/features/Search/searchSlice'

import Checkbox from '../Checkbox'

const Filter: FC<TFilterProps> = ({ filter, openBlockIndex, setOpenBlockIndex }) => {
  const categoryId = new URLSearchParams(location.search).get('category_id')
  const searchQuery = new URLSearchParams(location.search).get('search')

  const dispatch = useAppDispatch()
  const { search } = useAppSelector(state => state)
  const options = search.filters_option

  const options_config = {
    option_id: filter.option_id,
    category_id: categoryId,
    product_filter: searchQuery || '',
  }

  const handleOpenClick = (index: number) => {
    if (openBlockIndex === index) {
      setOpenBlockIndex(null)
    } else {
      setOpenBlockIndex(index)
      dispatch(fetchFilterOption(options_config))
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  const isBlockOpen = openBlockIndex === filter.option_id

  const toggleOption = (item: { option_value_id: number }) => {
    const isSelected = search?.stateFilterOptions?.includes(item.option_value_id)

    if (isSelected) {
      dispatch(removeFilterOption(item.option_value_id))
    } else {
      dispatch(setFilterOptions(item.option_value_id))
    }
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={() => handleOpenClick(filter.option_id)} className={styles.wrapper__title}>
        <h1>{filter.name}</h1>
        <button style={isBlockOpen ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' }}>
          <ChervonDownIcon />
        </button>
      </div>
      {isBlockOpen && (
        <div className={styles.wrapper__container}>
          {!search.optionloading ? (
            <p>loading...</p>
          ) : (
            <>
              {' '}
              {options?.map((item: any, index: number) => (
                <div className={styles.wrapper__container__item} key={index}>
                  <button onClick={() => toggleOption(item)}>
                    <Checkbox checked={search?.stateFilterOptions?.includes(item.option_value_id)} />
                  </button>
                  <p className={styles.wrapper__container__item__title}>{item.name}</p>
                </div>
              ))}{' '}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Filter
