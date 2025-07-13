'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { calculateYearsOfExperience } from '@/lib/utils';
import { CAREER_START_DATE } from '@/lib/constants';

export default function Experience() {
  const yearsOfExperience = calculateYearsOfExperience(CAREER_START_DATE);
  const experiences = [
    {
      company: 'CoinTracker',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      duration: 'Dec 2021 - Present',
      type: 'Full-time',
      accomplishments: [
        'Launched mobile app with 500K+ downloads, 12K reviews, and 4.7-star rating using React Native and Expo',
        'Led features reaching 1 million+ users including dashboard, spam classification, crypto prices, and tax center',
        'Executed growth experiments that increased revenue by $1 million through improved upsells and onboarding flows',
        'Collaborated closely with design and product teams to scope and balance user needs with business requirements',
        'Architected scalable web portfolio products using modern React patterns and TypeScript'
      ],
      technologies: ['React Native', 'Expo', 'React', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      company: 'Authentic8',
      position: 'Software Engineer - Chromium & Extensions',
      location: 'San Francisco, CA',
      duration: 'Jun 2020 - Dec 2021',
      type: 'Full-time',
      accomplishments: [
        'Developed custom Chromium fork browser with advanced security features and custom V8 objects',
        'Built multiple Chrome extensions with native-app communication, content scripts, and inter-extension messaging',
        'Created sleek and integrated Vue.js single-page applications with modern UI/UX patterns',
        'Implemented comprehensive testing frameworks using Jest and Puppeteer for automated browser testing',
        'Enhanced browser geolocation services and modified developer tools for enterprise security needs'
      ],
      technologies: ['Chromium', 'Vue.js', 'JavaScript', 'Chrome Extensions', 'Jest', 'Puppeteer']
    },
    {
      company: 'Hack Reactor',
      position: 'Software Engineer Mentor',
      location: 'San Francisco, CA',
      duration: 'Jan 2020 - May 2020',
      type: 'Part-time',
      accomplishments: [
        'Mentored and taught 50+ junior engineers on computer science fundamentals and best practices',
        'Guided students through modern full-stack web development technologies and frameworks',
        'Provided expertise in databases, application deployment, and software architecture patterns',
        'Achieved 95% job placement rate for mentored students in software engineering positions',
        'Developed curriculum improvements that enhanced student learning outcomes and engagement'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Databases', 'Teaching', 'Mentoring']
    },
    {
      company: 'Digilens',
      position: 'Software Engineer',
      location: 'Sunnyvale, CA',
      duration: 'Jul 2018 - Jan 2020',
      type: 'Full-time',
      accomplishments: [
        'Developed sleek and accessible React-based frontend interface for VR glass manufacturing',
        'Created Python software for image processing of dithered templates, reducing processing time from 25 minutes to 10 seconds',
        'Built production-level interface deployed on Samsung manufacturing lines for VR glasses',
        'Contributed to securing a $10 million deal through high-quality software solutions',
        'Optimized manufacturing workflows through efficient data processing and visualization tools'
      ],
      technologies: ['React', 'Python', 'Image Processing', 'Manufacturing Systems', 'Data Visualization']
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
            Professional Experience
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {yearsOfExperience}+ years of experience building innovative products in fast-paced startup environments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Experience Card */}
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-accent-blue font-semibold mb-2">
                        <BuildingOfficeIcon className="h-5 w-5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-muted space-y-1">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Accomplishments */}
                                      <div className="mb-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">Key Accomplishments</h4>
                      <ul className="space-y-2">
                        {exp.accomplishments.map((accomplishment, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-secondary">{accomplishment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                                      <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent-blue text-accent-blue rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 bg-card rounded-2xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Career Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue mb-2">{yearsOfExperience}+</div>
              <div className="text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue mb-2">1M+</div>
              <div className="text-secondary">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue mb-2">$11M+</div>
              <div className="text-secondary">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue mb-2">50+</div>
              <div className="text-secondary">Engineers Mentored</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 