import { type FC } from 'react'

import { Header } from 'components'

import styles from './PageLayout.module.scss'
import { RoutesWrapper } from 'router'

const PageLayout: FC = () => {
  return (
    <main className={styles.wrapper}>
      <Header />

      <RoutesWrapper />
    </main>
  )
}

export default PageLayout
