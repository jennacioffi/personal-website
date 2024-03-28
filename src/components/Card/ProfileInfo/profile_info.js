import React from 'react';
import styles from './profile_info.styles';

const ProfileInfo = ({ name, image }) => {
  return (
    <div style={styles.container}>
      <div style={styles.circle}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <div>
        <div style={styles.text}>Hey!</div>
        <div style={styles.text}>I'm {name} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
