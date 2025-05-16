import React from 'react';
import { motion } from 'framer-motion';
import styles from './PortfolioPage.module.css'; // PortfolioPage'e özel stiller
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Proje linkleri için ikonlar

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

// Örnek Proje Verisi
// Her proje için bir resim (public/images/projects/proje-adi.png gibi) ve linkler eklemelisin.
const projectsData = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "React ve Node.js kullanılarak geliştirilmiş, modern bir e-ticaret sitesi. Ürün listeleme, sepet işlemleri ve kullanıcı yönetimi özelliklerine sahip.",
    imageUrl: "/images/projects/ecommerce-placeholder.png", // Kendi proje resmini ekle
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveDemoUrl: "#", // Canlı demo linki (varsa)
    githubUrl: "#" // GitHub repo linki (varsa)
  },
  {
    id: 2,
    title: "Kişisel Blog Sitesi",
    description: "Next.js ve Markdown tabanlı içerik yönetimi ile oluşturulmuş, SEO dostu kişisel blog. Karanlık/aydınlık tema seçeneği mevcut.",
    imageUrl: "/images/projects/blog-placeholder.png", // Kendi proje resmini ekle
    tags: ["Next.js", "React", "Markdown", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Görev Yönetim Uygulaması",
    description: "Kullanıcıların günlük görevlerini takip edebileceği, sürükle-bırak özellikli bir görev yönetim aracı. Firebase ile gerçek zamanlı senkronizasyon.",
    imageUrl: "/images/projects/taskapp-placeholder.png", // Kendi proje resmini ekle
    tags: ["React", "Firebase", "Framer Motion"],
    liveDemoUrl: "#",
    githubUrl: "#"
  },
  // Daha fazla proje ekleyebilirsin...
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
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={styles.projectImage} 
              />
              {/* Resim üzerine hover efekti için bir overlay eklenebilir */}
              <div className={styles.imageOverlay}>
                <div className={styles.overlayLinks}>
                  {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" title="Canlı Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Reposu">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              {/* Detay linki veya modal açma butonu buraya eklenebilir */}
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