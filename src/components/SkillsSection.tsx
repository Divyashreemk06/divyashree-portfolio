import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'AI & MACHINE LEARNING',
    badge: 'CORE FOCUS',
    items: [
      'Machine Learning',
      'Generative AI',
      'NLP',
      'Python',
      'scikit-learn',
    ],
    description:
      'Focused on building practical AI and machine learning solutions, with experience in NLP, Generative AI, predictive modeling, and AI-assisted applications.',
    stat: 'AI / ML',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'FULL STACK DEVELOPMENT',
    badge: 'APPLICATIONS',
    items: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
    ],
    description:
      'Building responsive full-stack applications with modern frontend frameworks, secure backend APIs, and user-focused interfaces.',
    stat: 'FULL STACK',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA & DATABASES',
    badge: 'DATA LAYER',
    items: [
      'MySQL',
      'MongoDB',
      'Data Analytics',
      'Data Visualization',
      'Jupyter',
    ],
    description:
      'Working with structured and document databases while applying Python-based data analysis and visualization techniques to real-world datasets.',
    stat: 'SQL + NOSQL',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CLOUD & MLOPS',
    badge: 'DEPLOYMENT',
    items: [
      'Docker',
      'AWS App Runner',
      'DVC',
      'MLflow',
      'GitHub Actions',
    ],
    description:
      'Exploring practical MLOps and cloud workflows including containerization, model tracking, data versioning, CI/CD, and cloud deployment.',
    stat: 'CLOUD READY',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* =========================================================
          AMBIENT BACKGROUND GLOWS
      ========================================================= */}

      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* =========================================================
            EYEBROW HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              AI-DRIVEN.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              FULL-STACK.
            </span>
          </h2>

          {/* Small supporting line */}

          <p
            className="mt-5 max-w-2xl text-xs sm:text-sm text-[#8F8175] font-light tracking-wide leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            AI, machine learning, full-stack development, data, cloud,
            and MLOps technologies I use to turn ideas into working solutions.
          </p>
        </motion.div>

        {/* =========================================================
            BENTO GRID
        ========================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-60px',
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >

              {/* =================================================
                  TOP BORDER HIGHLIGHT
              ================================================= */}

              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* =================================================
                  CORNER ACCENTS
              ================================================= */}

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* =================================================
                  CARD META HEADER
              ================================================= */}

              <div className="flex items-center justify-between mb-4 gap-4">

                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                  {block.badge}
                </span>

                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all whitespace-nowrap">
                  {block.stat}
                </span>

              </div>

              {/* =================================================
                  CARD TITLE
              ================================================= */}

              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* =================================================
                  CARD DESCRIPTION
              ================================================= */}

              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* =================================================
                  TECHNOLOGY TAGS
              ================================================= */}

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">

                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* =================================================
                  HOVER LIGHT EFFECT
              ================================================= */}

              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#D4AF37]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            </motion.div>
          ))}
        </motion.div>

        {/* =========================================================
            BOTTOM TECH LINE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#665A50]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span>PYTHON</span>
          <span className="text-[#D4AF37]/40">•</span>

          <span>JAVA</span>
          <span className="text-[#D4AF37]/40">•</span>

          <span>C</span>
          <span className="text-[#D4AF37]/40">•</span>

          <span>GIT</span>
          <span className="text-[#D4AF37]/40">•</span>

          <span>GITHUB</span>
          <span className="text-[#D4AF37]/40">•</span>

          <span>VS CODE</span>
          <span className="text-[#D4AF37]/40">•</span>

          <span>JUPYTER</span>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;