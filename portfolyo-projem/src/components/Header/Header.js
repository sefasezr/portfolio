import React, { useState } from 'react';
// react-router-dom'dan Link bileşenini import ediyoruz.
import { Link } from 'react-router-dom';
// Mobil menü ikonu için react-icons'tan bir ikon import edebiliriz.
import { FaBars, FaTimes } from 'react-icons/fa';

// Header bileşenine özel stiller için CSS modül dosyasını import ediyoruz.
import styles from './Header.module.css';

// Header fonksiyonel bileşeni
const Header = () => {
  // Mobil menünün açık/kapalı durumunu tutmak için state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link to="/" onClick={closeMobileMenu}>Sefa ÖZTÜRK</Link>
        </div>

        {/* Sağ Taraf: Navigasyon Linkleri */}
        {/* İleride burası ekran boyutuna göre değişecek bir yapıya sahip olacak. */}
        <nav className={styles.mainNavigation}>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/hakkimda">Hakkımda</Link>
            </li>
            <li>
              <Link to="/becerilerim">Becerilerim</Link>
            </li>
            <li>
              <Link to="/portfolyo">Portfolyo</Link>
            </li>
            <li>
              <Link to="/iletisim">İletişim</Link>
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
                <Link to="/" onClick={closeMobileMenu}>Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/hakkimda" onClick={closeMobileMenu}>Hakkımda</Link>
              </li>
              <li>
                <Link to="/becerilerim" onClick={closeMobileMenu}>Becerilerim</Link>
              </li>
              <li>
                <Link to="/portfolyo" onClick={closeMobileMenu}>Portfolyo</Link>
              </li>
              <li>
                <Link to="/iletisim" onClick={closeMobileMenu}>İletişim</Link>
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