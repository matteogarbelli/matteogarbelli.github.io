import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matteo Garbelli - Postdoc Researcher in Applied Mathematics',
  description: 'Postdoc Researcher in Applied Mathematics at University of Verona. Research in Stochastic Processes, Machine Learning, and Mean Field Games.',
  keywords: ['Matteo Garbelli', 'Applied Mathematics', 'Stochastic Processes', 'Machine Learning', 'Mean Field Games', 'University of Verona'],
  authors: [{ name: 'Matteo Garbelli' }],
  openGraph: {
    title: 'Matteo Garbelli - Postdoc Researcher in Applied Mathematics',
    description: 'Postdoc Researcher in Applied Mathematics at University of Verona. Research in Stochastic Processes, Machine Learning, and Mean Field Games.',
    url: 'https://matteogarbelli.github.io',
    siteName: 'Matteo Garbelli',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matteo Garbelli - Postdoc Researcher in Applied Mathematics',
    description: 'Postdoc Researcher in Applied Mathematics at University of Verona. Research in Stochastic Processes, Machine Learning, and Mean Field Games.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`} suppressHydrationWarning={true}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
