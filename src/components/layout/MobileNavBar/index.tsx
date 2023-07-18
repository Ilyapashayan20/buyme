import React from 'react'

import styles from './MobileNavBar.module.scss'
import { NavLink } from 'react-router-dom'
import { ERoutePaths } from 'router/types'
import classNames from 'classnames'
import { HeartStrokeIcon, ListIcon, ShopCartIcon, UserIcon } from 'assets'

const MobileNavBar = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink
        to={ERoutePaths.CategoriesPage}
        className={({ isActive }) =>
          isActive ? classNames(styles.wrapper__item, styles.wrapper__item__active) : styles.wrapper__item
        }
      >
        <ListIcon />

        <p>Каталог</p>
      </NavLink>

      <NavLink
        to={ERoutePaths.Saved}
        className={({ isActive }) =>
          isActive ? classNames(styles.wrapper__item, styles.wrapper__item__active) : styles.wrapper__item
        }
      >
        <HeartStrokeIcon />

        <p>Бажане</p>
      </NavLink>

      <NavLink
        to={ERoutePaths.Basket}
        className={({ isActive }) =>
          isActive ? classNames(styles.wrapper__item, styles.wrapper__item__active) : styles.wrapper__item
        }
      >
        <ShopCartIcon />

        <p>Кошик</p>
      </NavLink>

      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? classNames(styles.wrapper__item, styles.wrapper__item__active) : styles.wrapper__item
        }
      >
        <UserIcon />

        <p>Кабінет</p>
      </NavLink>
    </div>
  )
}

export default MobileNavBar
