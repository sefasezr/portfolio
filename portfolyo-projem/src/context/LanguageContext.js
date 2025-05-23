import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations/translations';

// Dil context'ini oluştur
const LanguageContext = createContext();

// Nested objelerde belirtilen yolu takip ederek değeri bulan yardımcı fonksiyon
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
};

// Context provider bileşeni
export const LanguageProvider = ({ children }) => {
  // Varsayılan dil olarak Türkçe'yi ayarla
  const [currentLanguage, setCurrentLanguage] = useState('tr');

  // Dili değiştirmek için kullanılacak fonksiyon
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'tr' ? 'en' : 'tr');
  };

  // Mevcut dildeki metinleri al (nested objeler için güncellenmiş versiyon)
  const t = (key) => {
    const value = getNestedValue(translations[currentLanguage], key);
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key; // Anahtar bulunamazsa anahtarın kendisini döndür
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Context'i kullanmak için custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage hook must be used within a LanguageProvider');
  }
  return context;
}; 