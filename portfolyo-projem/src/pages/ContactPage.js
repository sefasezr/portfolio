import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactPage.module.css';
import { useLanguage } from '../context/LanguageContext';

// Animasyon ayarları
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in:      { opacity: 1, y: 0 },
  out:     { opacity: 0, y: -20 }
};
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.6 };

export default function ContactPage() {
  const { t } = useLanguage();
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
    if (!formData.name.trim())    newErrors.name    = t('nameRequired');
    if (!formData.email.trim())   newErrors.email   = t('emailRequired');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('emailInvalid');
    if (!formData.subject.trim()) newErrors.subject = t('subjectRequired');
    if (!formData.message.trim()) newErrors.message = t('messageRequired');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (validateForm()) {
      console.log("Form verileri:", formData);
      setIsSubmitted(true);
      alert(t('submitSuccess'));
    }
  };

  return (
      <motion.div
          className={styles.contactPageContainer}
          initial="initial" animate="in" exit="out"
          variants={pageVariants} transition={pageTransition}
      >
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>{t('contactTitle')}</h1>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.formContainer}>
          <p className={styles.infoText}>{t('contactInfo')}</p>
          {isSubmitted && (
              <p className={styles.successMessage}>{t('successMessage')}</p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* isim, e-posta, konu, mesaj alanları… */}
            <div className={styles.formGroup}>
              <label htmlFor="name">{t('nameLabel')}</label>
              <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  className={errors.name ? styles.inputError : ''}
                  placeholder={t('namePlaceholder')}
              />
              {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">{t('emailLabel')}</label>
              <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  className={errors.email ? styles.inputError : ''}
                  placeholder={t('emailPlaceholder')}
              />
              {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">{t('subjectLabel')}</label>
              <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className={errors.subject ? styles.inputError : ''}
                  placeholder={t('subjectPlaceholder')}
              />
              {errors.subject && <p className={styles.errorMessage}>{errors.subject}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">{t('messageLabel')}</label>
              <textarea
                  id="message" name="message" rows="6"
                  value={formData.message} onChange={handleChange}
                  className={errors.message ? styles.inputError : ''}
                  placeholder={t('messagePlaceholder')}
              ></textarea>
              {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
            </div>

            {/* Butonları yan yana koymak için wrapper */}
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.submitButton}>
                {t('sendMessage')}
              </button>
              <button
                  type="button"
                  className={styles.submitButton}
                  onClick={() => window.open('/cv.pdf', '_blank')}
              >
                {t('viewCV')}
              </button>
            </div>

          </form>
        </div>
      </motion.div>
  );
}
