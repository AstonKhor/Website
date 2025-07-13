'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

export default function Contact() {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'khoraston@gmail.com',
      href: 'mailto:khoraston@gmail.com',
      description: 'Send me an email for opportunities or collaborations'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '(214) 701-4245',
      href: 'tel:+12147014245',
      description: 'Call me for urgent matters or phone interviews'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'San Francisco, CA',
      href: null,
      description: 'Based in San Francisco, available for remote work'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aston-khor/',
      description: 'Connect with me on LinkedIn'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/AstonKhor',
      description: 'Check out my code on GitHub'
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
            Let&apos;s Work Together
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and innovative projects. 
            Feel free to reach out if you&apos;d like to connect!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-card rounded-2xl p-8 shadow-sm text-center hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue rounded-full mb-6">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-accent-blue font-semibold hover:text-accent-blue-hover transition-colors duration-200 text-lg block mb-3"
                >
                  {method.value}
                </a>
              ) : (
                <div className="text-primary font-semibold text-lg mb-3">{method.value}</div>
              )}
              <p className="text-secondary">{method.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="bg-card rounded-2xl p-8 shadow-sm mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Me Online</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-primary-foreground mb-6 max-w-2xl mx-auto">
              Whether you&apos;re looking for a senior engineer to join your team or need help bringing an idea to life, 
              I&apos;d love to hear from you. Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:khoraston@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-card transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
                <EnvelopeIcon className="ml-2 h-4 w-4" />
              </motion.a>
              <motion.a
                href="tel:+12147014245"
                className="inline-flex items-center px-6 py-3 border-2 border-background text-background font-medium rounded-lg hover:bg-background hover:text-foreground transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
                <PhoneIcon className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Availability Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green text-accent-green rounded-full">
            <div className="w-2 h-2 bg-current rounded-full"></div>
              <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 