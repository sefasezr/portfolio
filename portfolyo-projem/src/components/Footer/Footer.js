import React from 'react';
// Sosyal medya ikonlarını içe aktarıyoruz
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'; // FaXTwitter ve FaInstagram eklendi

// Footer bileşenine özel stiller için bir CSS modül dosyası.
import styles from './Footer.module.css';

// Footer fonksiyonel bileşeni
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dinamik olarak güncel yılı alır.

  return (
      <footer className={styles.siteFooter}>
        <div className={styles.footerContent}>
          {/* Sosyal Medya İkonları */}
          <div className={styles.socialMediaLinks}>
            <a
                href="https://github.com/sefasezr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profilim"
            >
              <FaGithub />
            </a>
            <a
                href="https://x.com/sefa_sezr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) profilim"
            >
              <FaXTwitter />
            </a>
            <a
                href="https://www.instagram.com/sefa_sezr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profilim"
            >
              <FaInstagram />
            </a>
            <a
                href="https://www.linkedin.com/in/sefa-sezer-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profilim"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Telif Hakkı Metni */}
          <div className={styles.copyrightText}>
            <p>&copy; {currentYear} Sefa SEZER. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
