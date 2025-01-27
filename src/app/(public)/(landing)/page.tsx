import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from '../components/Footer'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col space-y-32">
      <Hero />
      <Features />
      <Faq />

      <Footer />
    </div>
  )
}
