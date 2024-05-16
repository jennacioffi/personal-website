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
  IntroLinksButtonText: {
    fontFamily: fonts.kuraleFont,
    fontSize: 28,
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
    fontSize: 30,
  },
  H4: {
    fontFamily: fonts.kuraleFont,
    fontSize: 26,
  },
  H5: {
    fontFamily: fonts.kuraleFont,
    fontSize: 20,
  },
  H6: {
    fontFamily: fonts.kuraleFont,
    fontSize: 18,
  },
  H7: {
    fontFamily: fonts.kuraleFont,
    fontSize: 14,
  },

  ProjectCardTitle: {
    fontFamily: fonts.kuraleFont,
    color: colors.white,
    fontSize: 42,
  },
  ProjectSkillsText: {
    fontFamily: fonts.kuraleFont,
    color: colors.white,
    fontSize: 20,
  },
  ProjectKeySkillsBoxTitle: {
    fontFamily: fonts.kuraleFont,
    color: colors.black,
    fontSize: 30,
  },
  ProjectSummaryTitle: {
    fontFamily: fonts.kuraleFont,
    color: colors.black,
    fontSize: 30,
  },
  ProjectSummaryInfo: {
    fontFamily: fonts.kuraleFont,
    color: colors.black,
    fontSize: 20,
  }
};