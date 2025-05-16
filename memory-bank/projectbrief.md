# Proje Özeti: Kişisel Portfolyo Sayfası

## 1. Proje Adı
Kişisel Portfolyo Sayfası

## 2. Amaç
Sefa'nın kişisel çalışmalarını, becerilerini ve iletişim bilgilerini sergileyeceği modern, estetik ve duyarlı (responsive) bir web sitesi oluşturmak.

## 3. Tema ve Renk Paleti
*   **Tema:** Karanlık Tema
*   **Renk Paleti:**
    *   Arka Plan: `#0a0f24` (Koyu Gece Mavisi)
    *   Vurgu Rengi: `#ffc107` (Canlı Sarı)
    *   Yardımcı Renk: `#b0b0b0` (Gri)
*   **Yazı Tipi:** Poppins (Google Fonts üzerinden eklenecek)

## 4. Sayfalar ve İçerik
*   **Ana Sayfa:**
    *   Tanıtım metni veya başlık
    *   "Hakkımda" bölümüne yönlendiren buton
*   **Ben Kimim? (Hakkımda):**
    *   Kısa kişisel tanıtım yazısı
    *   Varsa bir fotoğraf
*   **Neler Yapabilirim? (Beceriler):**
    *   Teknik beceriler, araçlar, teknolojiler (ikonlarla veya basit listeyle)
*   **Portfolyo:**
    *   Kart yapısında projeler
    *   Hover efekti ile sarı vurgulu geçiş
    *   Kart tıklanınca modal veya sayfa geçişiyle proje detayı
*   **İletişim:**
    *   Form alanları: Ad Soyad, E-posta, Mesaj, Gönder butonu
    *   Backend bağlantısı olmayacak, sadece arayüz ve temel client-side validasyon.

## 5. Ekstra Özellikler
*   **Geçiş Animasyonları:** Sayfa geçişlerinde `framer-motion` ile fade-in / fade-out tarzı basit animasyonlar.
*   **Hover Efektleri:** Sarı renkle aydınlatma, ikon renk değişimi gibi görsel efektler.
*   **Responsive Tasarım:**
    *   Mobilde menü hamburger ikona dönüşecek (`react-icons` ile).
    *   İçerikler mobil cihazlarda tek sütuna dönüşecek.
*   **Footer:**
    *   Sosyal medya ikonları (X, GitHub, Facebook) - sadece ikon, yazı yok.
    *   Gri tonlamalı.

## 6. Kullanılacak Temel Kütüphaneler ve Araçlar
*   React
*   React Router: Sayfa geçişleri için.
*   Framer Motion: Animasyonlar için.
*   React Icons: Sosyal medya ikonları ve menü ikonu için. 