import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsPage.module.css'; // SkillsPage'e özel stiller

// react-icons'tan teknoloji ikonları
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaDatabase, FaServer, FaTools, FaCodeBranch
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiWebpack, SiTailwindcss, SiFigma } from 'react-icons/si';
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

// Örnek beceri verisi
// İkonları string olarak değil, doğrudan bileşen olarak kullanacağız.
const skillsData = [
  {
    category: "Frontend Teknolojileri",
    items: [
      { name: "HTML5", icon: <FaHtml5 />, level: "İleri" },
      { name: "CSS3", icon: <FaCss3Alt />, level: "İleri" },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare />, level: "İleri" },
      { name: "TypeScript", icon: <SiTypescript />, level: "Orta" },
      { name: "React", icon: <FaReact />, level: "İleri" },
      { name: "Redux", icon: <SiRedux />, level: "Orta" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Orta" },
      // İstersen buraya Next.js, Vue.js gibi başka frontend teknolojilerini ekleyebilirsin.
    ]
  },
  {
    category: "Backend Teknolojileri",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: "Orta" },
      { name: "Express.js", icon: <SiExpress />, level: "Orta" },
      // { name: "Python (Django/Flask)", icon: <FaPython />, level: "Başlangıç" }, // Örnek
    ]
  },
  {
    category: "Veritabanları",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, level: "Orta" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Başlangıç" },
      { name: "Firebase", icon: <SiFirebase />, level: "Orta" },
      // { name: "SQL Genel", icon: <FaDatabase />, level: "Orta" }, // Örnek
    ]
  },
  {
    category: "Araçlar ve Diğer Teknolojiler",
    items: [
      { name: "Git & GitHub", icon: <FaGitAlt />, level: "İleri" },
      { name: "npm & Yarn", icon: <FaNpm />, level: "İleri" },
      { name: "Webpack", icon: <SiWebpack />, level: "Temel" },
      { name: "Figma", icon: <SiFigma />, level: "Temel" }, // Tasarım aracı
      // { name: "Docker", icon: <SiDocker />, level: "Başlangıç" }, // Örnek
      // { name: "RESTful API'ler", icon: <FaServer />, level: "Orta" }, // Örnek
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