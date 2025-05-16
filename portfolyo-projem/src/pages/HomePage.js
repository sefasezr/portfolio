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
          Merhaba, ben <span className={styles.highlightName}>Sefa SEZER</span>.
        </h1>
        <p className={styles.heroSubtitle}>
          Java, Flutter gibi modern teknolojilerle yakından ilgileniyor, özellikle backend kodlama alanında kendimi geliştiriyorum. 
          Hırslı bir yapıya sahibim ve bilgisayar başında yeni şeyler öğrenerek ve projeler geliştirerek vakit geçirmeyi seviyorum.
        </p>

        <Link to="/hakkimda" className={styles.ctaButton}>
          Hakkımda Daha Fazla Bilgi
        </Link>
      </section>

      <section className={styles.goalsSection}> {/* Yeni bölüm: Hedeflerim */}
        <h2 className={styles.sectionTitle}>Hedeflerim</h2>
        <div className={styles.titleUnderlineSmall}></div> {/* Başlık için küçük bir çizgi */} 
        <div className={styles.goalsContent}>
          <p>
            Öncelikli hedefim, öğrendiğim ve üzerinde çalıştığım teknolojilerle yenilikçi projeler geliştirerek bu alanlarda tam yetkinlik kazanmaktır. 
            Yazılım geliştirme süreçlerindeki derinliğimi artırarak, karşılaşılan problemlere etkili ve sürdürülebilir çözümler üretebilmek istiyorum.
          </p>
          <p>
            Bununla birlikte, yapay zeka dünyasına büyük bir merak duyuyorum. Özellikle makine öğrenmesi ve görüntü işleme gibi heyecan verici alt dallarında 
            çalışmalar yapmayı ve bu konularda pratik deneyimler edinmeyi hedefliyorum. Geleceğin teknolojilerini şekillendiren bu alanlarda projeler geliştirmek, 
            kariyerimde ulaşmak istediğim önemli bir nokta.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage; 