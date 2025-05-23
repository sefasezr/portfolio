import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Animasyon ayarları
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20 // Hafifçe aşağıdan yukarı doğru gelme efekti için
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
  type: 'tween', // Yumuşak bir geçiş türü
  ease: 'anticipate', // Animasyonun hızlanma/yavaşlama eğrisi
  duration: 0.6 // Animasyon süresi (saniye cinsinden)
};

const HomePage = () => {
  const { t } = useLanguage();

  return (
      <motion.div
          className={styles.homePageContainer}
          initial="initial" // Başlangıç durumu (variants'tan 'initial' key'i)
          animate="in"      // Bitiş durumu (variants'tan 'in' key'i)
          exit="out"         // Çıkış durumu (sayfadan ayrılırken, AnimatePresence ile kullanılır)
          variants={pageVariants} // Yukarıda tanımladığımız variantları kullanır
          transition={pageTransition} // Yukarıda tanımladığımız geçiş ayarlarını kullanır
      >
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            {t('welcomeMessage')}, <span className={styles.highlightName}>Sefa SEZER</span>.
          </h1>
          <p className={styles.heroSubtitle}>
            {t('introText')}
          </p>

          <Link to="/hakkimda" className={styles.ctaButton}>
            {t('about')}
          </Link>
        </section>

        <section className={styles.goalsSection}> {/* Yeni bölüm: Hedeflerim */}
          <h2 className={styles.sectionTitle}>{t('goalsTitle')}</h2>
          <div className={styles.titleUnderlineSmall}></div> {/* Başlık için küçük bir çizgi */}
          <div className={styles.goalsContent}>
            <p>{t('goalsDescription1')}</p>
            <p>{t('goalsDescription2')}</p>
          </div>
        </section>
      </motion.div>
  );
};

export default HomePage;