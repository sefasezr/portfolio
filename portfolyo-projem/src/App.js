// src/App.js dosyası
// logo.svg ve App.css importları kaldırıldı.

import React from 'react';
// react-router-dom'dan gerekli bileşenleri import ediyoruz.
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

// Oluşturduğumuz bileşenleri import ediyoruz.
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Sayfa bileşenlerini import ediyoruz.
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

// App fonksiyonel bileşeni
function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="portfolio-app-container">
        <Header />

        {/* Ana içerik (sayfalar) Routes bileşeni içinde tanımlanacak */}
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Ana sayfa (URL yolu: "/") için Route tanımı */}
              <Route path="/" element={<HomePage />} />
              
              {/* Hakkımda sayfası (URL yolu: "/hakkimda") için Route tanımı */}
              <Route path="/hakkimda" element={<AboutPage />} />
              
              {/* Becerilerim sayfası (URL yolu: "/becerilerim") için Route tanımı */}
              <Route path="/becerilerim" element={<SkillsPage />} />
              
              {/* Portfolyo sayfası (URL yolu: "/portfolyo") için Route tanımı */}
              <Route path="/portfolyo" element={<PortfolioPage />} />
              
              {/* İletişim sayfası (URL yolu: "/iletisim") için Route tanımı */}
              <Route path="/iletisim" element={<ContactPage />} />
              
              {/* Eşleşmeyen bir yol için bir "Not Found" sayfası da eklenebilir (ileride) */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

// App bileşenini dışa aktarıyoruz ki index.js tarafından kullanılabilsin.
export default App;
