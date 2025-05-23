import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Animasyon ayarları
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

// Yazı animasyonu için karakter varyantları
const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HomePage = () => {
  const { t } = useLanguage();
  const [text] = useState("Sefa SEZER");
  
  return (
    <motion.div
      className={styles.homePageContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section className={styles.heroSection}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heroTitle}>
            {t('welcomeMessage')},{' '}
            <span className={styles.highlightName}>
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={characterAnimation}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            .
          </h1>
          <p className={styles.heroSubtitle}>
            {t('introText')}
          </p>

          <Link to="/hakkimda" className={styles.ctaButton}>
            {t('about')}
          </Link>
        </div>
      </section>

      <section className={styles.goalsSection}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>{t('goalsTitle')}</h2>
          <div className={styles.titleUnderlineSmall}></div>
          <div className={styles.goalsContent}>
            <p>{t('goalsDescription1')}</p>
            <p>{t('goalsDescription2')}</p>
          </div>
        </div>
      </section>

      <div className={styles.infoSections}>
        <section className={styles.educationSection}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>{t('educationTitle')}</h2>
            <div className={styles.titleUnderlineSmall}></div>
            <div className={styles.educationContent}>
              <div className={styles.educationItem}>
                <h3>{t('educationUniversity')}</h3>
                <p>{t('educationDepartment')}</p>
                <p>{t('educationYear')}</p>
                <p>{t('educationGPA')}</p>
              </div>
              <div className={styles.educationItem}>
                <h3>{t('educationHighSchool')}</h3>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.experienceSection}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>{t('experienceTitle')}</h2>
            <div className={styles.titleUnderlineSmall}></div>
            <div className={styles.experienceContent}>
              <div className={styles.experienceItem}>
                <h3>{t('experienceCurrent')}</h3>
                <p className={styles.experienceRole}>{t('experienceRole')}</p>
                <p className={styles.experienceDescription}>{t('experienceDescription')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default HomePage;