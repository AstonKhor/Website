'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const projects = [
    {
      title: 'CoinTracker Mobile App',
      description: 'React Native mobile application for cryptocurrency portfolio tracking and tax preparation with 500K+ downloads and 4.7-star rating.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'React Native Reanimated'],
      features: [
        'Real-time cryptocurrency portfolio tracking',
        'Tax center with automated calculations',
        'Spam classification for transactions',
        'Interactive dashboard with charts',
        'Cross-platform iOS and Android support'
      ],
      metrics: {
        downloads: '500K+',
        rating: '4.7/5',
        reviews: '12K+'
      },
      icon: DevicePhoneMobileIcon,
      category: 'Mobile App'
    },
    {
      title: 'Mirror Protocol Autostaker',
      description: 'Blockchain cryptocurrency Terra Network automated staking Chrome extension with React/TypeScript frontend and Terra network integration.',
      technologies: ['React', 'TypeScript', 'Chrome Extension API', 'Terra Network', 'Blockchain'],
      features: [
        'Automated staking for Terra Network',
        'React/TypeScript single-page application',
        'Chrome extension browser action popup',
        'Terra network node API integration',
        'Programmatic transaction execution'
      ],
      links: {
        github: 'https://github.com/AstonKhor/autostaker-ext'
      },
      icon: CodeBracketIcon,
      category: 'Open Source'
    },
    {
      title: 'Authentic8 Chromium Browser',
      description: 'Custom Chromium fork browser with advanced security features, custom V8 objects, and enterprise-grade extensions.',
      technologies: ['Chromium', 'C++', 'JavaScript', 'V8 Engine', 'Chrome Extensions'],
      features: [
        'Custom V8 objects for enhanced security',
        'Modified developer tools',
        'Enterprise geolocation services',
        'Multi-extension communication system',
        'Advanced browser security features'
      ],
      icon: GlobeAltIcon,
      category: 'Browser Technology'
    },
    {
      title: 'Digilens VR Manufacturing Interface',
      description: 'Production-level React interface for Samsung VR glass manufacturing with optimized Python image processing pipeline.',
      technologies: ['React', 'Python', 'Image Processing', 'Manufacturing Systems', 'Data Visualization'],
      features: [
        'Real-time manufacturing monitoring',
        'Image processing optimization (25min → 10s)',
        'Production line integration',
        'Quality control dashboards',
        'Manufacturing workflow automation'
      ],
      metrics: {
        deal: '$10M',
        performance: '150x faster',
        deployment: 'Samsung Production'
      },
      icon: GlobeAltIcon,
      category: 'Enterprise Software'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A showcase of innovative software solutions that have reached millions of users and generated significant business value
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-blue rounded-lg">
                      <project.icon className="h-8 w-8 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-muted text-secondary rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {project.links && (
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                                                      className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors duration-200"
                        >
                          <CodeBracketIcon className="h-4 w-4" />
                          GitHub
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-secondary mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics or Technologies */}
                  <div className="space-y-6">
                    {project.metrics && (
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Project Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-accent-blue rounded-lg">
                              <div className="text-2xl font-bold text-accent-blue mb-1">{value}</div>
                              <div className="text-sm text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
                      <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-primary-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on innovative projects that push the boundaries of what&apos;s possible. 
              Let&apos;s create something amazing together.
            </p>
                          <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-card transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              Get In Touch
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 