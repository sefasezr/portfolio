import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';

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
          Merhaba, ben <span className={styles.highlightName}>Sefa ÖZTÜRK</span>.
        </h1>
        <p className={styles.heroSubtitle}>
          Yaratıcı ve tutkulu bir Web Geliştiricisiyim. <br />
          Modern ve kullanıcı dostu dijital deneyimler oluşturuyorum.
        </p>

        <Link to="/hakkimda" className={styles.ctaButton}>
          Daha Fazla Bilgi Edinin
        </Link>
      </section>
    </motion.div>
  );
};

export default HomePage; 