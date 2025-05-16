# Aktif Bağlam: Kişisel Portfolyo Sayfası

## 1. Mevcut Odak
Projenin başlangıç ve planlama aşaması. Temel gereksinimler belirlendi ve "Memory Bank" (Hafıza Bankası) dosyaları oluşturuluyor. Projenin genel yapısı ve kullanılacak teknolojiler netleştiriliyor.

## 2. Son Değişiklikler ve Kararlar
*   **Proje Planı:** Sefa tarafından detaylı bir proje planı (tema, renkler, sayfalar, özellikler, kütüphaneler) sunuldu.
*   **İletişim Formu:** İletişim formunun herhangi bir backend (sunucu taraflı) işleyiciye (Formspree, Netlify Forms vb.) bağlanmayacağı, sadece ön yüz (frontend) tarafında bir arayüz ve temel kullanıcı giriş doğrulamaları (client-side validation) olacağı kararlaştırıldı.
*   **Memory Bank:** Proje için hafıza bankası dosyalarının oluşturulmasına başlandı.

## 3. Sonraki Adımlar
1.  Kalan Memory Bank dosyalarını tamamla:
    *   `systemPatterns.md`
    *   `techContext.md`
    *   `progress.md`
2.  Kullanıcıdan (Sefa) onay alarak `create-react-app` (veya önerilebilecek Vite gibi daha modern bir alternatif) ile React projesini oluştur.
3.  Proje için temel klasör yapısını (components, pages, assets vb.) oluştur.
4.  Belirlenen temel kütüphaneleri (`react-router-dom`, `framer-motion`, `react-icons`) projeye bağımlılık olarak ekle.
5.  Google Fonts üzerinden "Poppins" yazı tipini projeye entegre et.
6.  Temel CSS reset/normalize kurallarını ve genel stil dosyasını (global styles) oluştur.

## 4. Aktif Kararlar ve Değerlendirmeler
*   **Proje Başlatma Aracı:** `create-react-app` varsayılan olarak düşünülüyor, ancak Sefa'nın tercihine veya projenin ihtiyaçlarına göre Vite gibi daha hızlı bir alternatif de değerlendirilebilir.
*   **CSS Stratejisi:** Henüz kesinleşmedi. CSS Modules, Styled Components, Tailwind CSS gibi seçenekler ilerleyen aşamalarda Sefa ile tartışılarak belirlenebilir. Başlangıç için global CSS ve bileşen bazlı basit CSS dosyaları kullanılabilir.
*   **Statik Site Barındırma:** Proje tamamlandığında Netlify, Vercel veya GitHub Pages gibi platformlarda statik olarak barındırılması planlanabilir. 