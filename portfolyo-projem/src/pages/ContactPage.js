import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactPage.module.css';

// Animasyon ayarları
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in:      { opacity: 1, y: 0 },
  out:     { opacity: 0, y: -20 }
};
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.6 };

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Adınızı girmeniz zorunludur.";
    if (!formData.email.trim())   newErrors.email   = "E-posta adresinizi girmeniz zorunludur.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    if (!formData.subject.trim()) newErrors.subject = "Konu belirtmeniz zorunludur.";
    if (!formData.message.trim()) newErrors.message = "Mesajınızı girmeniz zorunludur.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (validateForm()) {
      console.log("Form verileri:", formData);
      setIsSubmitted(true);
      alert("Mesajınız başarıyla gönderildi!");
      // dilersen formu sıfırlayabilirsin:
      // setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
      <motion.div
          className={styles.contactPageContainer}
          initial="initial" animate="in" exit="out"
          variants={pageVariants} transition={pageTransition}
      >
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>İletişim</h1>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.formContainer}>
          <p className={styles.infoText}>
            Benimle iletişime geçmek için formu doldurun. Tüm alanlar zorunludur.
          </p>
          {isSubmitted && (
              <p className={styles.successMessage}>
                Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.
              </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* isim, e-posta, konu, mesaj alanları… */}
            <div className={styles.formGroup}>
              <label htmlFor="name">Adınız Soyadınız:</label>
              <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  className={errors.name ? styles.inputError : ''}
                  placeholder="Örn: Sefa Özarslan"
              />
              {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-posta Adresiniz:</label>
              <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  className={errors.email ? styles.inputError : ''}
                  placeholder="Örn: sefa@example.com"
              />
              {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Konu:</label>
              <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className={errors.subject ? styles.inputError : ''}
                  placeholder="Örn: İş Teklifi"
              />
              {errors.subject && <p className={styles.errorMessage}>{errors.subject}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mesajınız:</label>
              <textarea
                  id="message" name="message" rows="6"
                  value={formData.message} onChange={handleChange}
                  className={errors.message ? styles.inputError : ''}
                  placeholder="Merhaba, sizinle şu konu hakkında konuşmak istiyorum..."
              ></textarea>
              {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
            </div>

            {/* Butonları yan yana koymak için wrapper */}
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.submitButton}>
                Mesajı Gönder
              </button>
              <a
                  href="/cv.pdf"               /* public/cv.pdf yoluna işaret ediyor */
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
              >
                CV Görüntüle/İndir
              </a>
            </div>
          </form>
        </div>
      </motion.div>
  );
}
