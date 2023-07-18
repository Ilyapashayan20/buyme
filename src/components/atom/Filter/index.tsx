import { useState, type FC } from 'react'
import styles from './Filter.module.scss'
import { TFilterProps } from './type'
import { ChervonDownIcon } from 'assets'
import Checkbox from '../Checkbox'

const Filter: FC<TFilterProps> = ({title,items}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenClick = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.wrapper__title}>
            <h1>{title}</h1>
            <button onClick={handleOpenClick} className={styles.wrapper__title__svg}>
                <ChervonDownIcon />
            </button>
        </div>
          { isOpen && items && (
            <div className={styles.wrapper__container}>
                {items.map((item,index)=>(
                    <div className={styles.wrapper__container__item} key={index}>
                        <Checkbox />
                        <p className={styles.wrapper__container__item__title}>{title}</p>
                    </div>
                ))}
            </div>
          )}
    </div>
  )
}

export default Filter
