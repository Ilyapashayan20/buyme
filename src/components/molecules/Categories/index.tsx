import { FC } from 'react'

import { Button, Title } from 'components'
import { Link } from 'react-router-dom'

import styles from './Categories.module.scss'

const Categories: FC  <any>= ({data}) => {
 
  const subtitle = `В онлайн-каталозі BuyMe представлено близько 100 000 найменувань одягу, електроніки, меблів та інших товарів для усіх сфер життя`

  const renderCategories = data.data.map((element: any, index: number) => (
    <div className={styles.wrapper__item} key={index}>
      <div className={styles.wrapper__item__image_container}>
        <img src={element.thumb_large} alt='category' width='100%' height='100%' />
      </div>

      <p className={styles.wrapper__title}>{element.name}</p>
    </div>
  ))

  return (
    <article className={styles.wrapper}>
      <Title title='Категорії' subtitle={subtitle} />

      {data.loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className={styles.wrapper__content}>{renderCategories}</div>

          <Link to='/app/categories'>
            <Button>Дивитися усі</Button>
          </Link>
        </>
      )}
    </article>
  )
}

export default Categories
