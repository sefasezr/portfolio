import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 }
};

export default function HomePage() {
  return (
      <div className={styles.container}>

        <motion.header
            className={styles.hero}
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 1.2 } }
            }}
        >
          <h1 className={styles.title}>
            Merhaba, ben <span className={styles.accent}>Sefa SEZER</span>
          </h1>
          <p className={styles.subtitle}>
            Java, Flutter ve modern backend teknolojileriyle projeler geliştiriyorum. Tutkulu, hırslı ve sürekli öğrenmeye odaklıyım.
          </p>
          <Link to="/hakkimda" className={styles.button}>
            Hakkımda Daha Fazla
          </Link>
        </motion.header>

        <main className={styles.mainContent}>

          {/* Hedeflerim Bölümü (Eski Stil) */}
          <motion.section
              className={styles.goalsSection}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
          >
            <h2 className={styles.sectionTitle}>Hedeflerim</h2>
            <div className={styles.titleUnderlineSmall}></div>
            <div className={styles.goalsContent}>
              <p>
                Öncelikli hedefim, öğrendiğim ve üzerinde çalıştığım teknolojilerle yenilikçi projeler geliştirerek bu alanlarda tam
                yetkinlik kazanmaktır. Yazılım geliştirme süreçlerindeki derinliğimi artırarak, karşılaşılan problemlere etkili ve sürdürülebilir
                çözümler üretebilmek istiyorum.
              </p>
              <p>
                Bununla birlikte, yapay zeka dünyasına büyük bir merak duyuyorum. Özellikle makine öğrenmesi ve görüntü işleme gibi heyecan verici
                alt dallarında çalışmalar yapmayı ve bu konularda pratik deneyimler edinmeyi hedefliyorum. Geleceğin teknolojilerini şekillendiren bu
                alanlarda projeler geliştirmek, kariyerimde ulaşmak istediğim önemli bir nokta.
              </p>
            </div>
          </motion.section>

          {/* Eğitim ve Deneyimler Kutucukları */}
          <div className={styles.infoCards}>

            <motion.div
                className={styles.card}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>🏫</span>
                <h3 className={styles.cardTitle}>Eğitim</h3>
              </div>
              <ul className={styles.cardList}>
                <li><strong>Lise:</strong> Ülkü Yalçın Anadolu Lisesi</li>
                <li><strong>Üniversite:</strong> Balıkesir Üniversitesi, Bilgisayar Mühendisliği 2. Sınıf (Ort. 2.94)</li>
              </ul>
            </motion.div>

            <motion.div
                className={styles.card}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>💼</span>
                <h3 className={styles.cardTitle}>Deneyimler</h3>
              </div>
              <ul className={styles.cardList}>
                <li>Misya Mobil Takımı</li>
                <li>Teknofest Katılımcısı</li>
              </ul>
            </motion.div>

          </div>

        </main>
      </div>
  );
}
