import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsPage.module.css'; // SkillsPage'e özel stiller
import { useLanguage } from '../context/LanguageContext';

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

const SkillsPage = () => {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: t('mobileFrontend'),
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
      category: t('backendTechnologies'),
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Dart", icon: <SiDart /> }, // Backend'de Dart (Shelf, Aqueduct vb. ile kullanılabilir)
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ]
    },
    {
      category: t('databases'),
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ]
    },
    {
      category: t('toolsAndOther'),
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "npm & Yarn", icon: <FaNpm /> },
        { name: "Webpack", icon: <SiWebpack /> },
        { name: "Figma", icon: <SiFigma /> }, 
      ]
    }
  ];

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
        <h1 className={styles.pageTitle}>{t('skillsTitle')}</h1>
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
      <p className={styles.infoText}>{t('skillsInfo')}</p>
    </motion.div>
  );
};

export default SkillsPage; 