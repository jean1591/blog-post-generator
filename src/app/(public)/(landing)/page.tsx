import { Footer } from '../components/Footer'
import { TopicInput } from './components/TopicInput'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="h-screen bg-cyan-900">
        <div className="mx-auto flex h-screen w-full max-w-5xl flex-1 flex-col items-center justify-center space-y-4 py-24">
          <p className="inline-block bg-gradient-to-t from-cyan-200 to-white bg-clip-text text-7xl font-bold leading-tight text-transparent">
            Blog Post Generator
          </p>

          <p className="w-2/3 text-center text-lg leading-tight tracking-tight text-cyan-50">
            Effortlessly create high-quality blog posts from scratch. Generate
            attention-grabbing titles, organized content structures, and
            ready-to-publish articles in minutes with the power of AI
          </p>

          <div className="!mt-12 w-full">
            <TopicInput />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
