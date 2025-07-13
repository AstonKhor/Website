import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { calculateYearsOfExperience } from "@/lib/utils";
import { CAREER_START_DATE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yearsOfExperience = calculateYearsOfExperience(CAREER_START_DATE);

export const metadata: Metadata = {
  title: "Aston Khor - Senior Software Engineer",
  description: `Senior Software Engineer specializing in frontend and mobile development with ${yearsOfExperience}+ years experience in fast-paced startup environments.`,
  keywords: ["Software Engineer", "Frontend Developer", "React", "TypeScript", "Mobile Development", "React Native"],
  authors: [{ name: "Aston Khor" }],
  creator: "Aston Khor",
  openGraph: {
    title: "Aston Khor - Senior Software Engineer",
    description: `Senior Software Engineer specializing in frontend and mobile development with ${yearsOfExperience}+ years experience in fast-paced startup environments.`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aston Khor - Senior Software Engineer",
    description: `Senior Software Engineer specializing in frontend and mobile development with ${yearsOfExperience}+ years experience in fast-paced startup environments.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="pt-16 min-h-screen bg-background">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
