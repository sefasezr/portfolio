import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsPage.module.css'; // SkillsPage'e özel stiller

// react-icons'tan teknoloji ikonları
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaDatabase, FaServer, FaTools, FaCodeBranch,
  FaJava // FaJava eklendi
} from 'react-icons/fa';
import { 
  SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiWebpack, SiTailwindcss, SiFigma,
  SiFlutter, SiDart, SiSpringboot // Yeni ikonlar eklendi
} from 'react-icons/si';
// Diğer ikonları ihtiyaca göre ekleyebilirsin. Örneğin: SiNextdotjs, SiGraphql, SiDocker vb.

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

// Beceri verisi güncellendi
const skillsData = [
  {
    category: "Mobil / Frontend", // Kategori adı güncellendi
    items: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ]
  },
  {
    category: "Backend Teknolojileri",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Dart", icon: <SiDart /> }, // Backend'de Dart (Shelf, Aqueduct vb. ile kullanılabilir)
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ]
  },
  {
    category: "Veritabanları",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ]
  },
  {
    category: "Araçlar ve Diğer Teknolojiler",
    items: [
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "npm & Yarn", icon: <FaNpm /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "Figma", icon: <SiFigma /> }, 
    ]
  }
];

const SkillsPage = () => {
  return (
    <motion.div
      className={styles.skillsPageContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>Yeteneklerim</h1>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.skillsGrid}>
        {skillsData.map((skillCategory, index) => (
          <div key={index} className={styles.skillCategory}>
            <h2 className={styles.categoryTitle}>{skillCategory.category}</h2>
            <ul className={styles.skillsList}>
              {skillCategory.items.map((skill, skillIndex) => (
                <li key={skillIndex} className={styles.skillItem}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                  {/* İsteğe bağlı olarak beceri seviyesini de gösterebiliriz */}
                  {/* <span className={styles.skillLevel}>({skill.level})</span> */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.infoText}>
        Yukarıda listelenen teknolojiler ve araçlar, üzerinde çalıştığım ve deneyim kazandığım başlıca alanlardır. 
        Sürekli olarak yeni şeyler öğrenmeye ve kendimi geliştirmeye açığım!
      </p>
    </motion.div>
  );
};

export default SkillsPage; 