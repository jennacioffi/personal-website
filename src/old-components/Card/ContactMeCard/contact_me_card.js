import React, { useState, useEffect } from 'react';
import styles from './contact_me_card.styles';
import dotenv from 'dotenv';
import { colors } from '../../../styles/colors.js'; // Import colors from colors.js

export default function ContactMeCard({ color }) {
  dotenv.config();
  const backgroundColor = `${color}` || colors.defaultColor;
  const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false); // New state variable

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setIsEmailValid(validateEmail(value));
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    // Check if all fields are filled whenever formData changes
    setIsFormFilled(formData.name !== '' && formData.email !== '' && formData.message !== '' && isEmailValid);
  }, [formData, isEmailValid]);

  const handleSubmit = async () => {
    try {
      // Create a FormData object
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      formDataObj.append('access_key', WEB3FORMS_ACCESS_KEY);

      // Send form data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const data = await response.json();
      if (data.success) {
        console.log('Form submitted successfully:', data);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsEmailSent(true); // Update state to indicate email sent
      } else {
        console.error('Error submitting form:', data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{...styles.mainContainer, backgroundColor}}>
      <div style={styles.cardHeader}>
          Contact Me
      </div>
      <div style={styles.input}>
        <label htmlFor="name" style={{'color': colors.white}}>Your Name:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.inputField}
          maxLength="100"
        />
      </div>
      <div style={styles.input}>
        <label htmlFor="email" style={{'color': colors.white}}>Your Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.inputField}
          maxLength="100"
        />
      </div>
      <div style={styles.input}>
        <label htmlFor="message" style={{'color': colors.white}}>Your Message:</label><br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          cols="50"
          style={styles.textareaField}
          maxLength="250"
        ></textarea>
      </div>
      {isEmailSent ? (
        <div style={{
          ...styles.submitButton, 
          backgroundColor: colors.contactMeSubmitBtnColorSuccess, 
          color: colors.black}}>
          {'Email Sent'}
        </div>
      ) : isFormFilled ? (
        <button onClick={handleSubmit} style={{
          ...styles.submitButton, 
          backgroundColor: colors.submitBtnRegular,
          color: colors.white}}>
          {'Submit'}
        </button>
      ) : (
        <button style={{
          ...styles.failSubmitButton,   
          backgroundColor: colors.contactMeSubmitBtnColorFailure, 
          color: colors.white}}>
          {'Something is Invalid or Empty'}
        </button>
      )}
    </div>
  );
}
