import type { FC } from 'react'
import { Title, Card, Button } from 'components'
import styles from './Novelty.module.scss'
import { Link } from 'react-router-dom'

const Novelty: FC<any> = ({ data }) => {

  const subtitle = `Інтернет-магазин BuyMe — це доступні ціни та широкий асортимент товарів зі щоденним оновленням`

  const renderItems = data.data.map((element: any, index: number) => (
    <div>

    {/* <Link to={`/product/${element.id}`} > */}

    <Card
      key={index}
      id={element.product_id}
      image={element.thumb}
      title={element.name}
      rate={element.special}
      reviwers={element.reviwers}
      price={element.price}

    />

    {/* </Link> */}
    </div>
  ))

  return (
    <div className={styles.wrapper}>
      <Title title='Новинки' subtitle={subtitle} />

      {data.loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className={styles.wrapper__content}>{renderItems}</div>
          <Link to="/app/categories">
            <Button className={styles.wrapper__button}>Дивитися усі</Button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Novelty
