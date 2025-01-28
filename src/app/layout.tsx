import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Effortlessly generate high-quality, plagiarism-free articles in seconds. Customize titles, outlines, and content with our 100% free AI-powered article generator.'
const titleAndDefault =
  'Article Generator | Create high-quality articles for free'
const appUrl = 'https://article-generator.jeanrobertou.com'

export const metadata: Metadata = {
  title: titleAndDefault,
  description: metaDescription,
  keywords:
    'AI article generator, free article writing tool, AI-powered content creator, create articles for free, blog post generator, SEO-friendly content, custom articles',
  metadataBase: new URL(appUrl),
  openGraph: {
    title: titleAndDefault,
    description: metaDescription,
    url: appUrl,
    siteName: titleAndDefault,
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
  twitter: {
    title: titleAndDefault,
    card: 'summary',
    description: metaDescription,
    images: [
      {
        url: `${appUrl}/hero-profile.png`,
        alt: titleAndDefault,
      },
    ],
  },
  alternates: {
    canonical: appUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={classNames(
            inter.className,
            'bg-gray-50 font-mono text-gray-900'
          )}
        >
          <Script
            defer
            src={process.env.UMAMI_URL ?? ''}
            data-website-id={process.env.UMAMI_SITE_ID ?? ''}
            strategy="afterInteractive"
          />
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
