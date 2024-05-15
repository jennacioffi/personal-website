import React from 'react';

import styles from './Title.styles'

const Title = ({ title, isMobile }) => {

  return (
    <div style={styles.TitleElement}>
      <div style={styles.lineTitleItem}></div>
      <div style={{
        ...styles.TitleText,
        ...(isMobile && { fontSize: 40 }),
      }}>
        {title}
      </div>
      <div style={styles.lineTitleItem}></div>
    </div>
  )
}

export default Title;