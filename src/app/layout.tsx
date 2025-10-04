import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Matteo Garbelli - Postdoc Researcher in Applied Mathematics',
    template: '%s | Matteo Garbelli'
  },
  description: 'Postdoc Researcher in Applied Mathematics at University of Verona. Stochastic Processes, Machine Learning, Mean Field Games, and Energy Markets.',
  keywords: [
    'Matteo Garbelli',
    'Applied Mathematics',
    'Stochastic Processes',
    'Machine Learning',
    'Mean Field Games',
    'Energy Markets',
    'Mathematical Finance',
    'University of Verona',
    'Postdoc Researcher',
    'Academic Research',
    'Publications',
    'Mathematical Modeling'
  ],
  authors: [{ name: 'Matteo Garbelli', url: 'https://matteogarbelli.github.io' }],
  creator: 'Matteo Garbelli',
  publisher: 'Matteo Garbelli',
  category: 'Academic',
  openGraph: {
    title: 'Matteo Garbelli - Postdoc Researcher in Applied Mathematics',
    description: 'Postdoc Researcher in Applied Mathematics at University of Verona. Stochastic Processes, Machine Learning, Mean Field Games, and Energy Markets.',
    url: 'https://matteogarbelli.github.io',
    siteName: 'Matteo Garbelli - Academic Portfolio',
    images: [{
      url: 'https://matteogarbelli.github.io/images/profile.png',
      width: 800,
      height: 600,
      alt: 'Matteo Garbelli - Postdoc Researcher'
    }],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matteo Garbelli - Postdoc Researcher in Applied Mathematics',
    description: 'Postdoc Researcher in Applied Mathematics at University of Verona. Stochastic Processes, Machine Learning, Mean Field Games, and Energy Markets.',
    images: ['https://matteogarbelli.github.io/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with your actual Google Search Console verification code
  },
  alternates: {
    canonical: 'https://matteogarbelli.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://matteogarbelli.github.io" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#1f2937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Matteo Garbelli",
              "jobTitle": "Postdoc Researcher in Applied Mathematics",
              "affiliation": {
                "@type": "Organization",
                "name": "University of Verona"
              },
              "url": "https://matteogarbelli.github.io",
              "image": "https://matteogarbelli.github.io/images/profile.png",
              "sameAs": [
                "https://scholar.google.com/citations?user=your-google-scholar-id",
                "https://github.com/matteogarbelli",
                "https://orcid.org/your-orcid-id"
              ],
              "knowsAbout": [
                "Applied Mathematics",
                "Stochastic Processes",
                "Machine Learning",
                "Mean Field Games",
                "Energy Markets",
                "Mathematical Finance"
              ],
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "University of Verona"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`} suppressHydrationWarning={true}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P37CWHM75P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P37CWHM75P');
          `}
        </Script>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
