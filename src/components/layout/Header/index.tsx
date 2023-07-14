import type { FC } from 'react'

import { HeartIcon, ListIcon, LogoIcon, SearchIcon, ShopCartIcon, UserIcon } from 'assets'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <LogoIcon className={styles.wrapper__logo} />

      <button className={styles.wrapper__catalog}>
        <ListIcon />

        <p>Каталог</p>
      </button>

      <div className={styles.wrapper__search}>
        <input placeholder='Введіть назву товару або артикул' type='text' className={styles.wrapper__search__input} />

        <button className={styles.wrapper__search__button}>
          <SearchIcon />
        </button>
      </div>

      <div className={styles.wrapper__icons_group}>
        <div className={styles.wrapper__icons_group__item}>
          <HeartIcon />

          <p>Бажане</p>
        </div>

        <div className={styles.wrapper__icons_group__item}>
          <ShopCartIcon />

          <p>Кошик</p>
        </div>

        <div className={styles.wrapper__icons_group__item}>
          <UserIcon />

          <p>Увійти</p>
        </div>
      </div>
    </header>
  )
}

export default Header
