import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub , FaLinkedin } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';

import dotenv from 'dotenv';
import styles from './NavBar.styles'; // Import your styles

// Define the dropdown menu item component
const DropdownItem = ({ title, onClick }) => {
  // Define the icon component based on the title
  let iconComponent;
  switch (title) {
  case 'GitHub':
    iconComponent = <FaGithub />;
    break;
  case 'LinkedIn':
    iconComponent = <FaLinkedin />;
    break;
  case 'Contact Me':
    iconComponent = <MdEmail />;
    break;
  default:
    iconComponent = null;
    break;
  }

  return (
    <div style={styles.dropdownItem} onClick={onClick}>
      {/* Render the icon */}
      <div style={styles.dropDownIcon}>
        {iconComponent}
      </div>
      <div style={styles.dropDownText}>
        {title}
      </div>
    </div>
  );
};

const NavBar = () => {
  dotenv.config();

  // State to manage the visibility of the dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to handle mouse enter event for dropdown menu
  const handleMouseEnterDropdown = () => {
    setShowDropdown(true);
  };

  // Function to handle mouse leave event for dropdown menu
  const handleMouseLeaveDropdown = () => {
    setShowDropdown(false);
  };

  // Function to handle clicking on an item
  const handleItemClick = (item) => {
  // Close the dropdown when an item is clicked
    setShowDropdown(false);
  
    // Handle different actions based on the clicked item
    switch (item.title) {
    case 'GitHub':
      window.open('https://github.com/jennacioffi', '_blank');
      break;
    case 'LinkedIn':
      window.open('https://www.linkedin.com/in/jenna-cioffi/', '_blank');
      break;
    case 'Contact Me':
      window.location.href = '/personal-website/#/contact-me';
      break;
    default:
      console.log(`UNKNOWN: ${item.title}`);
      break;
    }
  };

  // List of navigation items
  const navItems = [
    { title: 'About Me & FAQs', to: '/about-me-and-faqs' },
    { title: 'Experience', to: '/experience' },
    { title: 'Projects', to: '/projects' },
    { title: 'Skills', to: '/skills' },
    { title: 'Socials', hasDropdown: true, items: ['GitHub', 'LinkedIn', 'Contact Me'] },
  ];

  return (
    <div style={styles.outerContainer}>
      {/* Map over navigation items */}
      {navItems.map((item, index) => (
        <div
          key={index}
          style={{ position: 'relative' }}
        >
          {item.hasDropdown ? (
            <div
              style={styles.menuItem}
              onMouseEnter={handleMouseEnterDropdown}
            >
              {item.title}
              <IoIosArrowDropdown style={styles.dropDownArrow} />
              {showDropdown && (
                <div style={styles.dropdown} onMouseEnter={handleMouseEnterDropdown} onMouseLeave={handleMouseLeaveDropdown}>
                  {item.items.map((dropdownItem, i) => (
                    <DropdownItem key={i} title={dropdownItem} onClick={() => handleItemClick({ title: dropdownItem })} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link to={item.to} style={styles.menuItem} onClick={handleItemClick}>
              {'\u00A0'}{item.title}{'\u00A0|\u00A0'}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
