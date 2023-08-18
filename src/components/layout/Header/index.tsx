import { type FC } from 'react'
import classNames from 'classnames'

import { useResponsive } from 'hooks'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search } from 'components'
import { BurgerIcon, HeartStrokeIcon, LogoIcon, ShopCartIcon, UserIcon } from 'assets'

import styles from './Header.module.scss'
import { ERoutePaths } from 'router/types'
import { useAppSelector } from 'hooks/useTypedSelector'

const Header: FC = () => {
  const { basketSlice, watchlistSLice } = useAppSelector(state => state)
  const basketQuality = basketSlice.data?.data?.length
  const watchlistQuality = watchlistSLice.data?.length

  const { isTablet } = useResponsive()

  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <Link to='/'>
          <LogoIcon className={styles.wrapper__logo} />
        </Link>

        {isTablet ? (
          <BurgerIcon />
        ) : (
          <>
            <Menu />

            <Search />

            <div className={styles.wrapper__icons_group}>
              <NavLink
                to={ERoutePaths.Saved}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.wrapper__icons_group__item, styles.wrapper__icons_group__item__active)
                    : styles.wrapper__icons_group__item
                }
              >
                {watchlistQuality !== 0 && watchlistQuality !== undefined && (
                  <div className='list_quality'>{watchlistQuality}</div>
                )}{' '}
                <HeartStrokeIcon />
                <p>Бажане</p>
              </NavLink>

              <NavLink
                to={ERoutePaths.Basket}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.wrapper__icons_group__item, styles.wrapper__icons_group__item__active)
                    : styles.wrapper__icons_group__item
                }
              >
                {basketQuality !== 0 && basketQuality !== undefined && (
                  <div className='list_quality'>{basketQuality}</div>
                )}{' '}
                <ShopCartIcon />
                <p>Кошик</p>
              </NavLink>

              <Link to='/login' role='button' className={styles.wrapper__icons_group__item}>
                <UserIcon />

                <p>Увійти</p>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
