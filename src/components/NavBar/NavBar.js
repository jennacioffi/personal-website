import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi'; // Hamburger menu icon

import dotenv from 'dotenv';
import styles from './NavBar.styles'; // Import your styles

const DropdownSocials = ({ title, onClick }) => {
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
      <div style={{cursor: 'pointer'}}>{iconComponent}</div>
      <div style={styles.dropDownText}>{title}</div>
    </div>
  );
};

const BarNavItems = ({ navItems, onClick }) => {
  return (
    <div style={styles.navMenuItemsContainer}>
      {navItems.map((item, index) => (
        item.to ? (
          <Link to={item.to} style={styles.navMenuItem} onClick={onClick} key={index}>
            {'\u00A0'}
            {item.title}
            {'\u00A0'}
          </Link>
        ) : (
          <a href={`#${item.id}`} style={styles.navMenuItem} onClick={onClick} key={index}>
            {'\u00A0'}
            {item.title}
            {'\u00A0'}
          </a>
        )
      ))}
    </div>
  )
}

const NavBar = () => {
  dotenv.config();

  const [showSocialsDropdown, setShowSocialsDropdown] = useState(false);
  const [showNavItemsDropDown, setShowNavItemsDropDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };

    handleResize(); // Call once to check initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSocialsDropdown = () => {
    setShowSocialsDropdown(!showSocialsDropdown);
  };

  const toggleNavItemsDropdown = () => {
    setShowNavItemsDropDown(!showNavItemsDropDown);
  };

  const handleItemClick = (item) => {
    if (item.to) {
      window.location.href = item.to;
    } else {
      switch (item.title) {
      case 'GitHub':
        window.open('https://github.com/jennacioffi', '_blank');
        break;
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/jenna-cioffi/', '_blank');
        break;
      case 'Contact Me':
        window.location.href = '/personal-website/#contact-me';
        break;
      default:
        console.log(`UNKNOWN: ${item.title}`);
        break;
      }
    }
  };

  const navItems = [
    { title: 'About Me', id: 'about-me' },
    { title: 'Experience', id: 'experience' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', to: '/projects' },
    { title: 'Contact Me', id: 'contact-me' },
    { title: 'FAQs', to: '/faqs' },
  ];

  const socialItems = ['GitHub', 'LinkedIn', 'Contact Me'];

  const NameContainer = () => (
    <div 
      style={styles.nameContainer}
      onClick={toggleSocialsDropdown}
    >
      Jenna Cioffi
      <IoIosArrowDropdown style={styles.dropDownArrow}/>
      {showSocialsDropdown && (
        <div style={styles.dropdown}>
          {socialItems.map((dropdownItem, i) => (
            <DropdownSocials
              key={i}
              title={dropdownItem}
              onClick={() => handleItemClick({ title: dropdownItem })}
            />
          ))}
        </div>
      )}
    </div>
  );

  const HamburgerMenu = ({ navItems }) => (
    <div style={{maxWidth: '950px'}}>
      <BiMenu style={styles.hamburgerIcon} onClick={toggleNavItemsDropdown} />
      {showNavItemsDropDown && (
        <div style={styles.hamburgerDropDown}>
          {navItems.map((navItem, i) => (
            navItem.to ? (
              <Link
                key={i}
                to={navItem.to}
                onClick={() => {
                  toggleNavItemsDropdown(); // Close the dropdown after clicking
                }}
                style={styles.hamburgerMenuItem}
              >
                {navItem.title}
              </Link>
            ) : (
              <a
                key={i}
                href={`#${navItem.id}`}
                onClick={() => {
                  toggleNavItemsDropdown(); // Close the dropdown after clicking
                }}
                style={styles.hamburgerMenuItem}
              >
                {navItem.title}
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div style={styles.outerContainer}>
      {isMobile ? (
        <>
          <NameContainer/>
          <HamburgerMenu
            navItems={navItems}
          />
        </>
      ) : (
        <>
          <NameContainer/>
          <BarNavItems 
            navItems={navItems}
            onClick={handleItemClick}
          />
        </>
      )}
    </div>
  );
};

export default NavBar;
