import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutPage.module.css'; // AboutPage'e özel stiller için CSS modülü

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

// Örnek fotoğraf yolu (public klasöründe olduğunu varsayalım)
// Kendi fotoğrafını public/images/sefa-ozturk.jpg gibi bir yola koyabilirsin.
const profileImageUrl = '/images/profile-placeholder.png'; // Şimdilik bir yer tutucu

const AboutPage = () => {
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
        <h1 className={styles.pageTitle}>Ben Kimim?</h1>
        <div className={styles.titleUnderline}></div>
      </div>

      <section className={styles.aboutContent}>
        <div className={styles.profileImageContainer}>
          <img 
            src={profileImageUrl} 
            alt="Sefa Öztürk - Profil Fotoğrafı" 
            className={styles.profileImage} 
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.greeting}>Merhaba!</h2>
          <p>
            Ben Sefa Öztürk. Teknolojiye ve yeniliğe olan derin tutkumla, dijital dünyada kullanıcı odaklı ve etkileyici çözümler üretmek için buradayım. Lise yıllarımdan beri yazılıma olan ilgim, beni sürekli öğrenmeye ve kendimi geliştirmeye teşvik etti. Özellikle web teknolojileri alanında, kullanıcıların hayatını kolaylaştıran ve onlara keyif veren arayüzler tasarlamaktan büyük heyecan duyuyorum.
          </p>
          <p>
            Kariyerimde, hem frontend hem de backend geliştirme süreçlerinde yer alarak projelerin her aşamasında aktif rol aldım. React, Node.js gibi modern teknolojilerle çalışmanın yanı sıra, her zaman yeni araçları ve metodolojileri keşfetmeye açığım. Problem çözme becerilerim ve analitik düşünme yeteneğimle, karşılaştığım zorlukları fırsata çevirmeyi hedeflerim.
          </p>
          <p>
            Boş zamanlarımda yeni teknolojileri araştırmanın yanı sıra, fotoğrafçılıkla ilgileniyor ve doğa yürüyüşleri yapıyorum. Bu aktiviteler, yaratıcılığımı besliyor ve bana farklı bakış açıları kazandırıyor.
          </p>
          <p>
            Hedefim, sürekli gelişen bu sektörde yeteneklerimi daha da ileriye taşımak ve anlamlı projelere imza atmaktır. Eğer siz de benim gibi teknolojiye tutkuluysanız ve birlikte harika işler başarabileceğimize inanıyorsanız, tanışmak için sabırsızlanıyorum!
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage; 