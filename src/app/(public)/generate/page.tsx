import { Footer } from '../components/Footer'
import { Metadata } from 'next'
import { Navbar } from '../components/Navbar'
import { SelectedTab } from './components/SelectedTab'
import { TabSelector } from './components/TabSelector'
import { metadata } from '@/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    alternates: {
      canonical: 'https://article-generator.jeanrobertou.com/generate',
    },
  }
}

export default function Generate() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <div className="mx-auto w-full max-w-3xl flex-1 space-y-8 px-4 py-24 sm:px-6 lg:px-8">
        <TabSelector />
        <SelectedTab />
      </div>

      <Footer />
    </div>
  )
}
