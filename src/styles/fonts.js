import { colors } from './colors.js';
import '@openfonts/kurale_all';

export const fonts = {
  kuraleFont: 'Kurale',
};

export const TextStyles = {
  // NavBar Component
  NavBarItems: {
    fontFamily: fonts.kuraleFont,
    fontSize: 25,
    color: colors.white,
  },
  
  // Home Page - Intro Component
  IntroName: {
    fontFamily: fonts.kuraleFont,
    fontSize: 70,
  },
  IntroCareerTitle: {
    fontFamily: fonts.kuraleFont,
    fontSize: 26,
  },

  // General Usage
  H1: {
    fontFamily: fonts.kuraleFont,
    fontSize: 70,
  },
  H2: {
    fontFamily: fonts.kuraleFont,
    fontSize: 60,
  },
  H3: {
    fontFamily: fonts.kuraleFont,
    fontSize: 40,
  },
  H4: {
    fontFamily: fonts.kuraleFont,
    fontSize: 30,
  },
  H5: {
    fontFamily: fonts.kuraleFont,
    fontSize: 26,
  },
};