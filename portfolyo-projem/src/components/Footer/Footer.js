import React from 'react';
// react-icons kütüphanesinden sosyal medya ikonlarını import ediyoruz.
// Örnek olarak Font Awesome ikonlarını kullanabiliriz: FaGithub, FaTwitter, FaFacebookF
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // FaTwitter kaldırıldı

// Footer bileşenine özel stiller için bir CSS modül dosyası.
import styles from './Footer.module.css';

// Footer fonksiyonel bileşeni
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dinamik olarak güncel yılı alır.

  return (
    // HTML5 <footer> semantik etiketini kullanıyoruz.
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>
        {/* Sosyal Medya İkonları */}
        <div className={styles.socialMediaLinks}>
          <a
            href="https://github.com/sefasezr" // GitHub linki güncellendi
            target="_blank" // Yeni sekmede açar
            rel="noopener noreferrer" // Güvenlik için
            aria-label="GitHub profilim" // Erişilebilirlik için ikonun ne olduğunu belirtir
          >
            <FaGithub />
          </a>
          {/* Twitter ikonu ve linki kaldırıldı 
          <a
            href="https://twitter.com/kullaniciadin" // Kendi Twitter profil linkini eklemelisin
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter profilim"
          >
            <FaTwitter />
          </a>
          */}
          <a
            href="https://www.linkedin.com/in/sefa-sezer-/" // LinkedIn linki güncellendi
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profilim"
          >
            <FaLinkedinIn />
          </a>
          {/* Facebook veya başka bir platform eklemek istersen buraya ekleyebilirsin */}
          {/*
          <a href="https://facebook.com/kullaniciadin" target="_blank" rel="noopener noreferrer" aria-label="Facebook profilim">
            <FaFacebookF />
          </a>
          */}
        </div>

        {/* Telif Hakkı Metni */}
        <div className={styles.copyrightText}>
          <p>&copy; {currentYear} Sefa SEZER. Tüm hakları saklıdır.</p> {/* Soyadı güncellendi */}
        </div>
      </div>
    </footer>
  );
};

// Footer bileşenini dışa aktarıyoruz.
export default Footer; 