'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { calculateYearsOfExperience } from '@/lib/utils';
import { CAREER_START_DATE } from '@/lib/constants';

export default function About() {
  const yearsOfExperience = calculateYearsOfExperience(CAREER_START_DATE);
  const skills = {
    'Mobile Development': ['React Native', 'Expo', 'React Native Reanimated', 'Styled Components'],
    'Frontend': ['JavaScript ES6+', 'React', 'Vue', 'Redux', 'HTML', 'CSS', 'TypeScript', 'Next.js'],
    'Backend': ['Node.js', 'Express', 'MySQL', 'MongoDB', 'PostgreSQL', 'Python'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Jest', 'Webpack', 'Babel', 'Big Query']
  };

  const achievements = [
    {
      icon: RocketLaunchIcon,
      title: 'Mobile App Success',
      description: 'Launched mobile app with 500K+ downloads and 12K reviews, maintaining 4.7-star rating'
    },
    {
      icon: CodeBracketIcon,
      title: 'Million+ Users',
      description: 'Built features reaching over 1 million users including dashboard, tax center, and crypto prices'
    },
    {
      icon: AcademicCapIcon,
      title: 'Mentorship Impact',
      description: 'Mentored 50+ junior engineers at Hack Reactor with 95% job placement success rate'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            About Me
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Seasoned Software Engineer with {yearsOfExperience}+ years in fast-paced startup environments, 
            known for versatility and delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            className="bg-card rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-6">My Story</h2>
            <div className="space-y-4 text-secondary">
              <p>
                I&apos;m a passionate software engineer who thrives in fast-paced startup environments where innovation meets impact. 
                My journey began with a Chemical Engineering degree from UC San Diego, but I found my true calling in software development.
              </p>
              <p>
                What drives me is the ability to transform complex problems into elegant solutions that users love. 
                Whether it&apos;s building a mobile app that reaches 500K+ users or developing web platforms that handle millions of transactions, 
                I focus on creating products that make a real difference.
              </p>
              <p>
                My expertise spans the full spectrum of frontend and mobile development, from React and TypeScript to React Native and Node.js. 
                I&apos;ve had the privilege of working with amazing teams at companies like CoinTracker, Authentic8, and Digilens, 
                where I&apos;ve contributed to products that have generated millions in revenue and served users worldwide.
              </p>
            </div>
          </motion.div>

          {/* Education & Location */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
              <div className="space-y-2">
                <div className="font-semibold text-primary">University of California San Diego</div>
                <div className="text-secondary">Bachelor of Science: Chemical Engineering</div>
                <div className="text-sm text-muted">September 2014 - June 2018</div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Location</h3>
              <div className="space-y-2">
                <div className="font-semibold text-primary">San Francisco, CA</div>
                <div className="text-secondary">Available for remote work</div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="text-secondary">khoraston@gmail.com</div>
                <div className="text-secondary">(214) 701-4245</div>
                <div className="text-secondary">linkedin.com/in/aston-khor/</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-card rounded-2xl p-6 shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">{achievement.title}</h3>
                <p className="text-secondary">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="bg-card rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-blue text-accent-blue rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 