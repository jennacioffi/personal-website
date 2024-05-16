import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import styles from './Carousel.styles';

const Carousel = ({ items, isMobile, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  const renderDots = () => (
    <div style={styles.dotsContainer}>
      {items.map((_, index) => (
        <div
          key={index}
          style={index === currentIndex ? styles.activeDot : styles.inactiveDot}
          onClick={() => goToCard(index)}
        />
      ))}
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div>
          {renderDots()}
          <div style={{ ...styles.carouselContainer, flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
              <div style={styles.arrows} onClick={goToPrevCard}>
                <FaArrowCircleLeft size={isMobile ? 35 : 50} />
              </div>
              <div style={styles.arrows} onClick={goToNextCard}>
                <FaArrowCircleRight size={isMobile ? 35 : 50} />
              </div>
            </div>
            {items.map((item, index) => (
              <div key={index} style={index === currentIndex ? {} : { display: 'none' }}>
                {renderItem(item, isMobile)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {renderDots()}
          <div style={styles.carouselContainer}>
            <div style={styles.arrows} onClick={goToPrevCard}>
              <FaArrowCircleLeft size={isMobile ? 35 : 50} />
            </div>
            {items.map((item, index) => (
              <div key={index} style={index === currentIndex ? {} : { display: 'none' }}>
                {renderItem(item, isMobile)}
              </div>
            ))}
            <div style={styles.arrows} onClick={goToNextCard}>
              <FaArrowCircleRight size={isMobile ? 35 : 50} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
