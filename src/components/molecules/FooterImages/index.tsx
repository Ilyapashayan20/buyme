import type { FC } from 'react'

import { Title } from 'components'

import styles from './FooterImages.module.scss'

const FooterImages: FC = () => {
  const images = new Array(6).fill('')

  const renderImages = images.map((_, index) => (
    <img width='240px' key={index} height='240px' src={`images/footer/${index + 1}.png`} />
  ))

  return (
    <div className={styles.wrapper}>
      <Title
        title='Слідкуй за нами в Instagram'
        subtitle='Доєднуйся до наших соц мереж та будь з нами на одній хвилі'
      />

      <div className={styles.wrapper__images}>{renderImages}</div>
    </div>
  )
}

export default FooterImages
