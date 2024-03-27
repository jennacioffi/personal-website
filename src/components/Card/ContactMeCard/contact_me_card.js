import React, { useState } from 'react';
import styles from './contact_me_card.styles';

export default function ContactMeCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.outerCard}>
        <div style={styles.cardHeader}>
          Contact Me
        </div>
        <div style={styles.input}>
          <label htmlFor="name">Your Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.input}>
          <label htmlFor="email">Your Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.input}>
          <label htmlFor="message">Your Message:</label><br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="50"
            style={styles.textareaField}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
