import React from 'react';

import { Title } from '../../components/index';

import styles from './FAQs.styles';

export function FAQs() {

  return (
    <div style={styles.outerContainer}>
      <Title title={'Interview FAQ\'s'} id={'faqs'}/>
      <div style={styles.tempText}>
        FAQ's Coming Soon!
      </div>
    </div>
  )
}