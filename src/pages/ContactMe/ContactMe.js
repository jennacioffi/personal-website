import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { colors } from '../../styles/colors.js';
import styles from './ContactMe.styles';
import dotenv from 'dotenv';

const Title = () => {
  return (
    <div style={{ backgroundColor: colors.palette2 }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={styles.titleContainer}>
          <div style={styles.titleTEXT}>
              Contact Me
          </div>
        </div>
      </div>
    </div>
  )
};

function NameInput({ formData, handleChange }) {
  return (
    <div style={styles.outerFormContainer}>
      <div style={styles.InputTitleContainer}>
        <div style={styles.InputTitle}>
          Your Name:
        </div>
      </div>
      <div style={styles.InputContainer}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
    </div>
  );
}

function EmailInput({ formData, handleChange }) {
  return (
    <div style={styles.outerFormContainer}>
      <div style={styles.InputTitleContainer}>
        <div style={styles.InputTitle}>
          Your Email:
        </div>
      </div>
      <div style={styles.InputContainer}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
    </div>
  );
}

function MessageInput({ formData, handleChange }) {
  return (
    <div style={styles.outerFormContainer}>
      <div style={styles.InputTitleContainer}>
        <div style={styles.InputTitle}>
          Message:
        </div>
      </div>
      <div style={styles.InputContainer}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{...styles.input, height: '400px'}}
        ></textarea>
      </div>
    </div>
  );
}

function SubmitButton({ isEmailSent, isFormFilled, handleSubmit }) {
  if (isEmailSent) {
    return (
      <div style={{...styles.button, backgroundColor: colors.green}}>
        Email Sent
      </div>
    );
  } else if (isFormFilled) {
    return (
      <button onClick={handleSubmit} style={{...styles.button, backgroundColor: colors.blue}}>
        Submit
      </button>
    );
  } else {
    return (
      <button style={{...styles.button, backgroundColor: colors.red}}>
        Something is Invalid or Empty
      </button>
    );
  }
}

export function ContactMe() {
  dotenv.config();
  const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

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
    <div>
      <NavBar />
      <div style={styles.outerContainer}>
        <div style={styles.main}>
          <div style={styles.inner}>
            <Title />
            <div style={styles.outerContactFormContainer}>
              <NameInput formData={formData} handleChange={handleChange} />
              <EmailInput formData={formData} handleChange={handleChange} />
              <MessageInput formData={formData} handleChange={handleChange} />
              <SubmitButton isEmailSent={isEmailSent} isFormFilled={isFormFilled} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
