import React from 'react';

import { Title } from '../../components/index';

import styles from './PageNotFound.styles';

export function PageNotFound() {

  return (
    <div style={styles.outerContainer}>
      <Title title={'Page Not Found'} id={'page-not-found'}/>
      <div style={styles.PageNotFoundText}>
        Sorry, the page you're looking for doesn't exist. Please use the navigation menu to explore this website.
      </div>
    </div>
  );
}