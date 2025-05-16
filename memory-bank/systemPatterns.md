# Sistem Desenleri: Kişisel Portfolyo Sayfası

## 1. Sistem Mimarisi
*   **Mimari Türü:** Tek Sayfa Uygulaması (Single Page Application - SPA)
*   **Temel Kütüphane:** React
*   **Yaklaşım:** Bileşen tabanlı (Component-based) geliştirme. Arayüz, yeniden kullanılabilir ve yönetilebilir bileşenlere ayrılacaktır.

## 2. Anahtar Teknik Kararlar
*   **UI Geliştirme:** React kütüphanesi kullanılacaktır.
*   **Sayfa Yönlendirme (Routing):** İstemci taraflı (client-side) yönlendirme için `react-router-dom` kütüphanesi kullanılacaktır.
*   **Animasyonlar:** Akıcı ve modern bir kullanıcı deneyimi için sayfa geçişleri ve mikro etkileşimlerde `framer-motion` kütüphanesi tercih edilecektir.
*   **İkonografi:** Proje genelinde ikon kullanımı için `react-icons` kütüphanesinden faydalanılacaktır.
*   **Stil Yönetimi:** Başlangıçta global CSS dosyaları ve bileşenlere özel CSS (veya CSS Modules) kullanılacaktır. Projenin ilerleyişine göre Styled Components veya Tailwind CSS gibi daha gelişmiş çözümler değerlendirilebilir.
*   **Devlet Yönetimi (State Management):** Basit ve orta karmaşıklıktaki durumlar için React'in kendi state (`useState`, `useReducer`) ve context (`useContext`) API'leri yeterli olacaktır. İleride daha karmaşık bir state yönetimi ihtiyacı doğarsa Redux veya Zustand gibi kütüphaneler düşünülebilir (şu an için planlanmıyor).

## 3. Kullanılacak Tasarım Desenleri (Başlangıç)
*   **Bileşen Tabanlı Tasarım (Component-Based Design):** Arayüz, küçük, bağımsız ve yeniden kullanılabilir bileşenlerden oluşturulacaktır.
*   **Sunumsal ve Konteyner Bileşenler (Presentational and Container Components):** Mümkün olduğunca, bileşenlerin görevlerini ayırmak (görünüm ve iş mantığı) hedeflenecektir, ancak projenin ölçeğine göre esneklik sağlanacaktır.
*   **Koşullu Renderlama (Conditional Rendering):** Duruma göre farklı arayüz elemanlarının gösterilmesi için React'in koşullu renderlama yetenekleri kullanılacaktır.

## 4. Bileşen Hiyerarşisi (Ön Taslak)
```
App (Ana Uygulama Bileşeni)
├── Layout (Opsiyonel: Header, Footer gibi genel yerleşimleri sarmalayabilir)
│   ├── Header / Navbar
│   │   └── MobileMenu (Hamburger ikon ile açılır)
│   └── Footer
│       └── SocialMediaIcons
├── Router (React Router ile sayfa yönlendirmesi)
│   └── Routes
│       ├── HomePage
│       │   └── CallToActionButton
│       ├── AboutPage
│       ├── SkillsPage
│       │   └── SkillCard / SkillItem
│       ├── PortfolioPage
│       │   └── ProjectCard
│       │       └── ProjectModal (Proje detayları için)
│       └── ContactPage
│           └── ContactForm
└── GlobalStyles / ThemeProvider (Stil ve tema yönetimi için)
```
**Not:** Bu hiyerarşi başlangıç için bir taslaktır ve proje geliştikçe değişebilir veya detaylanabilir. 