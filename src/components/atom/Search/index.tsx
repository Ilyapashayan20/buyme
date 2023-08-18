import type { FC,KeyboardEvent } from 'react'

import { SearchIcon } from 'assets'

import styles from './Search.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { fetchSearchResults, setQuery } from 'store/features/Search/searchSlice'

const Search: FC = () => {


  const dispatch = useAppDispatch()


  
  const query = useAppSelector((state)=> state.search.query)

  const handleSearch = ()=>{
    if(query){

    dispatch(fetchSearchResults(query))
    window.location.href = `/app/categories?search=${query}`;
    setQuery('')
    }
  }


  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
      value={query}
      onChange={(e)=> dispatch(setQuery(e.target.value))}
      onKeyPress={handleKeyPress}

      placeholder='Введіть назву товару або артикул' type='text' className={styles.wrapper__input} />

      <button onClick={handleSearch} className={styles.wrapper__button}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
