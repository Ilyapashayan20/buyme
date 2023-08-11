import type { FC } from 'react'

import { Title, Card, Button } from 'components'

import styles from './Promotions.module.scss'
import { Link } from 'react-router-dom'

const Novelty: FC<any> = ({ data }) => {
  const subtitle = `Інтернет-магазин BuyMe регулярно проводить масштабний розпродаж товарів. Інколи знижки сягають 75% на одяг, електроніку та інші товари`




  const renderItems = data.data.map((element: any, index: number) => (
    <Link to={`/product/${element.id}`} >
      <Card
        key={index}
        image={element.thumb}
        title={element.name}
        rate={element.special}
        reviwers={element.reviwers}
        price={element.price}
      />
      </Link>
  ))

  return (
    <div className={styles.wrapper}>
      <Title title='Акції' subtitle={subtitle} />

      <div className={styles.wrapper__content}>{renderItems}</div>
      <Link to='app/categories'>
        <Button className={styles.wrapper__button}>Дивитися усі</Button>
      </Link>
    </div>
  )
}

export default Novelty
