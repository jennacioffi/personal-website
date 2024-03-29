import React from 'react';
import styles from './profile_info.styles';
import profileImage from '../../../images/jenna-image.jpeg'

const ProfileInfo = ({ name }) => {
  return (
    <div style={styles.container}>
      <div style={styles.circle}>
        <img src={profileImage} alt={name} style={styles.image} />
      </div>
      <div>
        <div style={styles.text}>Hey!</div>
        <div style={styles.text}>I'm {name} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
