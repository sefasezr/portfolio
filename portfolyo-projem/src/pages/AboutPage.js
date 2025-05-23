import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutPage.module.css'; // AboutPage'e özel stiller için CSS modülü
import { useLanguage } from '../context/LanguageContext';

// Animasyon ayarları (diğer sayfalardan kopyalandı)
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

// Profil resmi için doğru yol
const profileImageUrl = '/images/profile.jpg'; // Resim yolu güncellendi

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className={styles.aboutPageContainer} // Sayfa geneli için bir sarmalayıcı
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>{t('whoAmI')}</h1>
        <div className={styles.titleUnderline}></div>
      </div>

      <section className={styles.aboutContent}>
        <div className={styles.profileImageContainer}>
          <img 
            src={profileImageUrl} 
            alt={t('profileAlt')}
            className={styles.profileImage} 
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.greeting}>{t('greeting')}</h2>
          <p>{t('aboutMe1')}</p>
          <p>{t('aboutMe2')}</p>
          <p>{t('aboutMe3')}</p>
          <p>{t('aboutMe4')}</p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage; 