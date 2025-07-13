# Aston Khor - Personal Website

A modern, responsive personal website showcasing my skills as a Senior Software Engineer. Built with cutting-edge web technologies to demonstrate technical expertise and attention to detail.

## 🚀 Live Demo

Visit the website at: [Your deployed URL here]

## 📋 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Navigation**: Smooth scrolling and animated active states
- **Performance Focused**: Built with Next.js 14 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and semantic markup
- **Dynamic Content**: Years of experience automatically updates based on career start date

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Package Manager**: Bun
- **Deployment**: Vercel (recommended)

## 🏗️ Architecture

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience timeline
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── Navigation.tsx     # Navigation component
└── lib/                   # Utility functions
    ├── constants.ts       # Application constants
    └── utils.ts           # Helper functions
```

### Key Components

- **Navigation**: Responsive navigation with smooth animations
- **Hero Section**: Engaging landing section with floating elements
- **Experience Timeline**: Interactive timeline with detailed job history
- **Projects Showcase**: Feature-rich project displays with metrics
- **Contact Form**: Clean contact interface with multiple channels

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind theme in the `@theme` directive
- Customize colors, fonts, and spacing in CSS variables

### Content
- Update personal information in each page component
- Modify the experience data in `src/app/experience/page.tsx`
- Add new projects to `src/app/projects/page.tsx`
- Update contact information in `src/app/contact/page.tsx`
- Change career start date in `src/lib/constants.ts` to automatically update years of experience

### Performance
- Images are optimized with Next.js Image component
- Fonts are loaded efficiently with next/font
- Animations are GPU-accelerated with Framer Motion
- Code splitting is handled automatically by Next.js

## 📱 Pages

1. **Home** (`/`): Hero section with introduction and quick stats
2. **About** (`/about`): Detailed background, skills, and achievements
3. **Experience** (`/experience`): Professional timeline with accomplishments
4. **Projects** (`/projects`): Showcase of notable projects and work
5. **Contact** (`/contact`): Contact information and call-to-action

## 🔧 Development

### Available Scripts

```bash
# Development server
bun dev

# Build for production
bun build

# Start production server
bun start

# Lint code
bun lint

# Type check
bun type-check
```

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (add if desired)
- **Tailwind CSS**: Utility-first styling approach

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The website can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

This is a personal website, but if you have suggestions for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

**Aston Khor**
- Email: khoraston@gmail.com
- Phone: (214) 701-4245
- LinkedIn: [linkedin.com/in/aston-khor/](https://linkedin.com/in/aston-khor/)
- Location: San Francisco, CA

---

*Built with ❤️ and modern web technologies*
