import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-24 pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="absolute top-1/4 right-0 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-8"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >

          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}

          <div className="lg:col-span-7">

            {/* Heading */}
            <motion.div variants={fadeUpVariants}>
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  I DON'T JUST
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  LEARN AI.
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
                  I BUILD WITH IT.
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 max-w-2xl"
            >
              <p
                className="text-sm sm:text-base leading-[1.9] text-[#A8988B] font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                I'm{' '}
                <span className="text-[#F3DBB3] font-medium">
                  Divyashree M Kanumappa
                </span>
                , an Artificial Intelligence and Machine Learning student
                focused on building practical solutions with AI, machine
                learning, and modern full-stack technologies. I enjoy
                turning real-world problems into working products,
                experimenting with emerging AI tools, and learning by
                building.
              </p>
            </motion.div>

            {/* =====================================================
                STATS
                ONLY 2 STATS KEPT
            ===================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 gap-6 sm:gap-10 mt-12 pt-8 border-t border-[#8C6D4F]/25 max-w-2xl"
            >
              {/* CGPA */}
              <div className="group">
                <div
                  className="text-4xl sm:text-5xl text-[#F7E7C4] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  8.65
                </div>

                <div
                  className="mt-1 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#8F8175]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  CGPA
                </div>
              </div>

              {/* FEATURED PROJECTS */}
              <div className="group">
                <div
                  className="text-4xl sm:text-5xl text-[#F7E7C4] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  4
                </div>

                <div
                  className="mt-1 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#8F8175]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  FEATURED PROJECTS
                </div>
              </div>
            </motion.div>

            {/* Signature */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-10"
            >
              <span
                className="text-3xl text-[#D4AF37]/80 italic"
                style={{ fontFamily: "'Allura', cursive" }}
              >
                Divyashree
              </span>
            </motion.div>
          </div>

          {/* =======================================================
              RIGHT IMAGE
          ======================================================= */}

          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5"
          >
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              {/* Outer Frame */}
              <div className="absolute -inset-3 border border-[#8C6D4F]/30 pointer-events-none" />

              <div className="absolute -inset-5 border border-[#D4AF37]/10 pointer-events-none" />

              {/* Corner Decorations */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4AF37] z-20" />

              <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4AF37] z-20" />

              <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4AF37] z-20" />

              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4AF37] z-20" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#100D0B]">
                <img
                  src={aboutImg}
                  alt="Divyashree M Kanumappa"
                  className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.06] saturate-[1.02] group-hover:brightness-105 group-hover:contrast-[1.12] transition-all duration-700 ease-out"
                />

                {/* Cinematic Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />

                {/* Hover Glow */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"
                />
              </div>

              {/* Image Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div>
                  <span
                    className="text-[9px] tracking-[0.25em] uppercase text-[#F3DBB3]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    AI / ML DEVELOPER
                  </span>

                  <div className="w-12 h-[1px] bg-[#D4AF37] mt-2" />
                </div>

                <span
                  className="text-[8px] tracking-[0.2em] uppercase text-[#B8AAA0]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  01
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mt-20 pt-8 border-t border-[#8C6D4F]/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p
            className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#665A50]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BUILDING AT THE INTERSECTION OF
            <span className="text-[#D4AF37]"> AI </span>
            AND
            <span className="text-[#D4AF37]"> REAL-WORLD IMPACT.</span>
          </p>

          <span
            className="text-[9px] tracking-[0.25em] uppercase text-[#665A50]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            MYSORE • INDIA
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;