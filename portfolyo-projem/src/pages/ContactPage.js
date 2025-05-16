import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactPage.module.css'; // Henüz oluşturulmadı, birazdan oluşturacağız

// Sayfa geçiş animasyonları için ayarlar
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

const ContactPage = () => {
  // Form verilerini tutmak için state'ler
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Hata mesajlarını tutmak için state
  const [errors, setErrors] = useState({});
  // Form gönderim durumu için state (örneğin başarılı gönderim sonrası mesaj göstermek için)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form alanlarındaki değişiklikleri işleyen fonksiyon
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Kullanıcı yazmaya başladığında ilgili hatayı temizle
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  // Temel form validasyonu
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Adınızı girmeniz zorunludur.";
    if (!formData.email.trim()) {
      newErrors.email = "E-posta adresinizi girmeniz zorunludur.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { // Basit email format kontrolü
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Konu belirtmeniz zorunludur.";
    if (!formData.message.trim()) newErrors.message = "Mesajınızı girmeniz zorunludur.";
    
    setErrors(newErrors);
    // Eğer newErrors objesi boşsa (yani hata yoksa) true, aksi halde false döner
    return Object.keys(newErrors).length === 0;
  };

  // Form gönderimini işleyen fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
    setIsSubmitted(false); // Yeni gönderimden önce önceki başarı mesajını temizle

    if (validateForm()) {
      // Normalde burada backend'e veri gönderilir (örn: fetch API ile)
      // Sadece frontend olduğu için bir mesaj gösterelim
      console.log("Form verileri:", formData);
      setIsSubmitted(true);
      // Formu sıfırla (isteğe bağlı)
      // setFormData({ name: '', email: '', subject: '', message: '' }); 
      // setErrors({});
      alert("Mesajınız başarıyla gönderildi!\nForm verileri geliştirme konsoluna yazdırıldı.");
    } else {
      console.log("Formda validasyon hataları var.");
    }
  };

  return (
    <motion.div
      className={styles.contactPageContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>İletişim</h1>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.formContainer}>
        <p className={styles.infoText}>
          Benimle iletişime geçmek, bir proje teklif etmek veya sadece merhaba demek için aşağıdaki formu kullanabilirsiniz.
          Tüm alanların doldurulması zorunludur.
        </p>
        
        {isSubmitted && (
          <p className={styles.successMessage}>
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapmaya çalışacağım.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate> {/* noValidate HTML5 validasyonunu devre dışı bırakır, kendi validasyonumuzu kullanırız */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Adınız Soyadınız:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.inputError : ''}
              placeholder="Örn: Sefa Özarslan"
            />
            {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta Adresiniz:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ''}
              placeholder="Orn: sefa@example.com"
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Konu:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? styles.inputError : ''}
              placeholder="Örn: İş Teklifi"
            />
            {errors.subject && <p className={styles.errorMessage}>{errors.subject}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mesajınız:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.inputError : ''}
              placeholder="Merhaba, sizinle şu konu hakkında konuşmak istiyorum..."
            ></textarea>
            {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Mesajı Gönder
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage; 