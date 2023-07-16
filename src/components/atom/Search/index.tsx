import type { FC } from 'react'

import { SearchIcon } from 'assets'

import styles from './Search.module.scss'

const Search: FC = () => {
  return (
    <div className={styles.wrapper}>
      <input placeholder='Введіть назву товару або артикул' type='text' className={styles.wrapper__input} />

      <button className={styles.wrapper__button}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
