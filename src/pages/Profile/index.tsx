import React, { FC, useEffect, useState } from 'react'
import styles from './Profile.module.scss'
import { useNavigate } from 'react-router'
import { Button } from 'components'

const Profile: FC = () => {
  const [userName, setUserName] = useState('')
  const [userTelepon, setUseTelepon] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('userData')

    if (userData) {
      const parsedData = JSON.parse(userData)
      setUserName(parsedData.name)
      setUseTelepon(parsedData.telephone)
      navigate('/profile')
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('userData')
    window.open('/', '_self')
  }

  return (
    <div className={styles.wrapper}>
      <h1>{userName}!</h1>
      <h2>{userTelepon}</h2>
      <Button onClick={logout}>Bийти</Button>
    </div>
  )
}

export default Profile
