import React, { FC, useEffect, useState } from "react";
import styles from './Profile.module.scss'

const Profile: FC = () => {
  const [userName, setUserName] = useState("");
  const [userTelepon, setUseTelepon] = useState("");



  useEffect(() => {
    const userData = localStorage.getItem("userData");
    

    if (userData) {
      const parsedData = JSON.parse(userData);
      setUserName(parsedData.name); 
      setUseTelepon(parsedData.telephone)
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>{userName}!</h1>
      <h2>{userTelepon}</h2>
    </div>
  );
};

export default Profile;
