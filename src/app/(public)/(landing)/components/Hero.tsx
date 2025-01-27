import { TopicInput } from './TopicInput'

export const Hero = () => {
  return (
    <div className="h-screen bg-cyan-900">
      <div className="mx-auto flex h-screen w-full max-w-5xl flex-1 flex-col items-center justify-center space-y-4 px-4 py-24 md:px-0">
        <h1 className="inline-block bg-gradient-to-t from-cyan-200 to-white bg-clip-text text-7xl font-bold leading-tight tracking-tight text-transparent">
          Blog Post Generator
        </h1>

        <p className="w-full text-center text-lg leading-tight tracking-tight text-cyan-50 md:w-2/3">
          Effortlessly create high-quality blog posts from scratch. Generate
          attention-grabbing titles, organized content structures, and
          ready-to-publish articles in minutes with the power of AI
        </p>

        <div className="!mt-12 w-full">
          <TopicInput />
        </div>
      </div>
    </div>
  )
}
