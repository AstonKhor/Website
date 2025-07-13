'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { calculateYearsOfExperience } from '@/lib/utils';
import { CAREER_START_DATE } from '@/lib/constants';

export default function Home() {
  const yearsOfExperience = calculateYearsOfExperience(CAREER_START_DATE);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aston Khor
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Senior Software Engineer specializing in{' '}
            <span className="text-blue-600 font-semibold">frontend</span> and{' '}
            <span className="text-purple-600 font-semibold">mobile development</span>{' '}
            with {yearsOfExperience}+ years of experience building products that users love.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-hover transition-colors duration-200 group"
            >
              View My Work
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-border text-secondary font-medium rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 group"
            >
              Get In Touch
              <DocumentArrowDownIcon className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">{yearsOfExperience}+</div>
              <div className="text-sm text-muted">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted">Users Reached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted">App Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">$1M+</div>
              <div className="text-sm text-muted">Revenue Impact</div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-accent-blue rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-900 rounded-full opacity-60 dark:opacity-30"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 dark:bg-green-900 rounded-full opacity-60 dark:opacity-30"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Building Products That Matter
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mb-8">
              I specialize in creating exceptional user experiences through modern web and mobile technologies. 
              From React Native apps with 500K+ downloads to web platforms serving millions of users, 
              I turn innovative ideas into successful products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'React Native', 'Next.js', 'Node.js', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent-blue text-accent-blue rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
