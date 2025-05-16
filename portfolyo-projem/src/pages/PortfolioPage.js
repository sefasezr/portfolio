import React from 'react';
import { motion } from 'framer-motion';
import styles from './PortfolioPage.module.css'; // PortfolioPage'e özel stiller
import { FaGithub } from 'react-icons/fa'; // FaExternalLinkAlt importu kaldırıldı

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

// Sefa'nın Proje Verileri
const projectsData = [
  {
    id: 1,
    title: "Hastane Hizmetleri Sistemi",
    description: "Java, Spring Boot, PostgreSQL ve Hibernate kullanılarak geliştirilen bir hastane yönetim sistemi. Aktif olarak geliştirilmekte olup, Flutter ile mobil entegrasyonu planlanmaktadır.",
    imageUrl: "/images/projects/hospital-service.png", // Bu alan şimdilik kullanılmayacak ama veri olarak kalabilir
    tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Flutter (Planlanan)"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/sefasezr/hospital-service"
  },
  {
    id: 2,
    title: "Öğrenci Yönetim Sistemi",
    description: "Java, Spring Boot, PostgreSQL ve Hibernate teknolojileri kullanılarak oluşturulmuş kapsamlı bir öğrenci yönetim sistemi.",
    imageUrl: "/images/projects/student-management.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/sefasezr/student-management2"
  },
  {
    id: 3,
    title: "Otel Yönetim Sistemi",
    description: "Java, Spring Boot, PostgreSQL ve Hibernate ile geliştirilmiş, otel operasyonlarını yönetmeye yönelik bir sistem.",
    imageUrl: "/images/projects/hotel-management.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/sefasezr/HotelManagementSystem"
  },
  {
    id: 4,
    title: "Otel Yönetim Sistemi (Masaüstü)",
    description: "Görsel programlama dersi kapsamında Python, PyQt, QtDesigner ve PostgreSQL kullanılarak geliştirilmiş bir masaüstü otel yönetim uygulaması.",
    imageUrl: "/images/projects/otel-pyqt.png",
    tags: ["Python", "PyQt", "QtDesigner", "PostgreSQL"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/sefasezr/otel_pyqt"
  },
  {
    id: 5,
    title: "İngilizce Öğrenme Uygulaması",
    description: "Flutter ve Firebase kullanılarak geliştirilmekte olan bir mobil İngilizce öğrenme uygulaması.",
    imageUrl: "/images/projects/english-app.png",
    tags: ["Flutter", "Firebase", "Dart"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/sefasezr/englishapp"
  }
  // Proje resimlerini public/images/projects/ klasörüne ilgili adlarla eklemeyi unutma!
];

const PortfolioPage = () => {
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
        <h1 className={styles.pageTitle}>Portfolyo</h1>
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
                  title={`${project.title} - GitHub Reposu`}
                  aria-label={`${project.title} - GitHub Reposu`}
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
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              {/* Canlı demo linki istenirse buraya veya farklı bir yere eklenebilir */}
            </div>
          </div>
        ))}
      </div>
       <p className={styles.infoText}>
        Burada yer alan projeler, yeteneklerimi ve deneyimlerimi yansıtan çalışmalardan bazılarıdır. 
        Daha fazlasını keşfetmek veya projeler hakkında detaylı bilgi almak için benimle iletişime geçebilirsiniz.
      </p>
    </motion.div>
  );
};

export default PortfolioPage; 