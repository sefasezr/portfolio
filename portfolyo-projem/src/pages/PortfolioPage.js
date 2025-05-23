import React from 'react';
import { motion } from 'framer-motion';
import styles from './PortfolioPage.module.css'; // PortfolioPage'e özel stiller
import { FaGithub } from 'react-icons/fa'; // FaExternalLinkAlt importu kaldırıldı
import { useLanguage } from '../context/LanguageContext';

// Animasyon ayarları
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

const PortfolioPage = () => {
  const { t } = useLanguage();

  // Sabit proje verileri
const projectsData = [
  {
    id: 1,
      key: 'hospital',
    tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Flutter (Planlanan)"],
      imageUrl: "/images/projects/hospital-service.png",
    githubUrl: "https://github.com/sefasezr/hospital-service"
  },
  {
    id: 2,
      key: 'student',
      tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
    imageUrl: "/images/projects/student-management.png",
    githubUrl: "https://github.com/sefasezr/student-management2"
  },
  {
    id: 3,
      key: 'hotel',
      tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
    imageUrl: "/images/projects/hotel-management.png",
    githubUrl: "https://github.com/sefasezr/HotelManagementSystem"
  },
  {
    id: 4,
      key: 'hotelDesktop',
      tags: ["Python", "PyQt", "QtDesigner", "PostgreSQL"],
    imageUrl: "/images/projects/otel-pyqt.png",
    githubUrl: "https://github.com/sefasezr/otel_pyqt"
  },
  {
    id: 5,
      key: 'english',
      tags: ["Flutter", "Firebase", "Dart"],
    imageUrl: "/images/projects/english-app.png",
    githubUrl: "https://github.com/sefasezr/englishapp"
  }
  // Proje resimlerini public/images/projects/ klasörüne ilgili adlarla eklemeyi unutma!
];

  return (
    <motion.div
      className={styles.portfolioPageContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>{t('portfolioTitle')}</h1>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.cardImageContainer}>
              {/* Resim yerine tıklanabilir GitHub ikonu gösterilecek */}
              {project.githubUrl && project.githubUrl !== "#" ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectImageReplacementLink} // Yeni CSS sınıfı
                  title={`${t(`projects.${project.key}.title`)} - GitHub Reposu`}
                  aria-label={`${t(`projects.${project.key}.title`)} - GitHub Reposu`}
                >
                  <FaGithub className={styles.projectCardIcon} /> {/* Yeni CSS sınıfı */}
                </a>
              ) : (
                // GitHub linki yoksa veya geçersizse boş bir alan veya farklı bir yer tutucu gösterilebilir
                // Şimdilik boş bırakıyoruz, .cardImageContainer'ın arka planı görünecek
                <div className={styles.noLinkPlaceholder}></div>
              )}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>
                {t(`projects.${project.key}.title`)}
              </h3>
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <p className={styles.projectDescription}>
                {t(`projects.${project.key}.description`)}
              </p>
              {/* Canlı demo linki istenirse buraya veya farklı bir yere eklenebilir */}
            </div>
          </div>
        ))}
      </div>
       <p className={styles.infoText}>{t('portfolioInfo')}</p>
    </motion.div>
  );
};

export default PortfolioPage; 