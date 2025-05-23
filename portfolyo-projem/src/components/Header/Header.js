import React, { useState } from 'react';
// react-router-dom'dan Link bileşenini import ediyoruz.
import { Link } from 'react-router-dom';
// Mobil menü ikonu için react-icons'tan bir ikon import edebiliriz.
import { FaBars, FaTimes } from 'react-icons/fa';

// Header bileşenine özel stiller için CSS modül dosyasını import ediyoruz.
import styles from './Header.module.css';
import { useLanguage } from '../../context/LanguageContext';

// Header fonksiyonel bileşeni
const Header = () => {
  // Mobil menünün açık/kapalı durumunu tutmak için state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  // Mobil menüyü açıp kapatan fonksiyon
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Linklere tıklandığında mobil menüyü kapatmak için fonksiyon (opsiyonel ama iyi bir UX için)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // HTML5 <header> semantik etiketini kullanıyoruz.
    // Stil için CSS modülünden gelen sınıf adını kullanıyoruz.
    <header className={styles.siteHeader}>
      <div className={styles.headerContent}> {/* İçeriği sarmalamak için bir div */}
        {/* Sol Taraf: Site Adı/Logosu */}
        <div className={styles.siteBrand}>
          {/* Artık Link bileşenini kullanıyoruz */}
          <Link to="/" onClick={closeMobileMenu}>Sefa SEZER</Link>
        </div>

        {/* Sağ Taraf: Navigasyon Linkleri */}
        {/* İleride burası ekran boyutuna göre değişecek bir yapıya sahip olacak. */}
        <nav className={styles.mainNavigation}>
          <ul>
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/hakkimda">{t('about')}</Link>
            </li>
            <li>
              <Link to="/becerilerim">{t('skills')}</Link>
            </li>
            <li>
              <Link to="/portfolyo">{t('portfolio')}</Link>
            </li>
            <li>
              <Link to="/iletisim">{t('contact')}</Link>
            </li>
            <li>
              <button onClick={toggleLanguage} className={styles.languageButton}>
                {t('language')}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobil Menü İkonu (sadece mobil ve tablette görünecek) */}
        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobil Navigasyon Menüsü (isMobileMenuOpen true ise görünecek) */}
        {isMobileMenuOpen && (
          <nav className={`${styles.mobileNavigation} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeMobileMenu}>{t('home')}</Link>
              </li>
              <li>
                <Link to="/hakkimda" onClick={closeMobileMenu}>{t('about')}</Link>
              </li>
              <li>
                <Link to="/becerilerim" onClick={closeMobileMenu}>{t('skills')}</Link>
              </li>
              <li>
                <Link to="/portfolyo" onClick={closeMobileMenu}>{t('portfolio')}</Link>
              </li>
              <li>
                <Link to="/iletisim" onClick={closeMobileMenu}>{t('contact')}</Link>
              </li>
              <li>
                <button onClick={toggleLanguage} className={styles.languageButton}>
                  {t('language')}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

// Header bileşenini dışa aktarıyoruz.
export default Header; 