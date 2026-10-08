import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  const scrollToSection = (href: string) => {
    let element: Element | null = document.querySelector(href);

    // Fallback specifically for Projects
    if (!element && href === '#work') {
      element =
        document.getElementById('projects') ||
        document.getElementById('work');
    }

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-screen overflow-hidden bg-black text-[#E8DFD8]"
    >
      {/* =========================================================
          HERO VIDEO
          No logo
          No signature
          No overlay
      ========================================================= */}

      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-center"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 lg:px-16 py-7">
        <div className="flex items-center justify-between">
          {/* Name */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => scrollToSection('#hero')}
            className="text-left"
          >
            <span
              className="text-[13px] sm:text-[15px] lg:text-[17px] font-medium tracking-[0.28em] text-[#E8DFD8]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              DIVYASHREE M KANUMAPPA
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="hidden lg:flex items-center gap-10"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-[11px] tracking-[0.28em] text-[#B8AAA0] hover:text-white transition-colors duration-300 group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </motion.div>

          {/* Let's Talk */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            onClick={() => scrollToSection('#contact')}
            className="hidden sm:block border border-[#8C6D4F]/70 px-6 py-3 text-[10px] tracking-[0.25em] text-[#E8DFD8] hover:border-[#D4AF37] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            LET'S TALK ↗
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="lg:hidden flex items-center justify-center gap-4 sm:gap-6 mt-6 overflow-x-auto"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="shrink-0 text-[8px] sm:text-[9px] tracking-[0.2em] text-[#B8AAA0] hover:text-white transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-20 min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto"
        >
          <div className="max-w-[720px]">
            {/* Main Heading */}
            <motion.h1
              variants={titleVariants}
              className="uppercase leading-[0.82] tracking-tight select-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              <span className="block text-[5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D9D1CA] to-[#70665E]">
                I BUILD
              </span>

              <span className="block text-[5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                INTELLIGENT
              </span>

              <span className="block text-[5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                SOLUTIONS
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8"
            >
              <p
                className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.28em] uppercase text-[#E8DFD8]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                AI/ML DEVELOPER
                <span className="mx-2 text-[#D4AF37]">•</span>
                FULL STACK DEVELOPER
                <span className="mx-2 text-[#D4AF37]">•</span>
                BUILDER
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-[620px] text-sm sm:text-base leading-relaxed text-[#B8AAA0] font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I build intelligent applications that combine AI, machine
              learning, and modern full-stack technologies to solve
              real-world problems.
            </motion.p>

            {/* =====================================================
                BUTTONS
            ===================================================== */}

            <motion.div
              variants={fadeUpVariants}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              {/* EXPLORE MY WORK */}
              <button
                type="button"
                onClick={() => scrollToSection('#work')}
                className="group relative border border-[#B58A4A] px-8 py-4 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-[#E8DFD8] hover:text-white transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="relative z-10">
                  EXPLORE MY WORK ↗
                </span>

                <span className="absolute inset-0 bg-[#B58A4A]/15 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </button>

              {/* DOWNLOAD RESUME */}
              <a
                href="/resume.pdf"
                download
                className="group relative border border-[#6F6257] px-8 py-4 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-[#C4B5A5] hover:text-white hover:border-[#D4AF37] transition-all duration-300 text-center overflow-hidden"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="relative z-10">
                  DOWNLOAD RESUME ↓
                </span>

                <span className="absolute inset-0 bg-[#D4AF37]/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-3"
      >
        <span
          className="text-[8px] tracking-[0.3em] text-[#8F8175]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          SCROLL
        </span>

        <motion.div
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[1px] h-10 bg-[#D4AF37] origin-top"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;