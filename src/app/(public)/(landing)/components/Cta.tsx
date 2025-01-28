import Link from 'next/link'

export const Cta = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl rounded-xl bg-cyan-900 px-4 py-16 md:px-0">
      <div className="absolute inset-0 opacity-10">
        <div>
          <div className="absolute -left-12 top-12 h-64 w-64 rounded-full bg-cyan-100 opacity-50"></div>
          <div className="absolute -top-8 left-2/3 h-48 w-48 rounded-full bg-cyan-100 opacity-60"></div>
          <div className="absolute -bottom-12 -right-12 h-96 w-96 rounded-full bg-cyan-100 opacity-25"></div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-12">
        <p className="text-4xl font-bold leading-tight tracking-tight text-cyan-50">
          Unlock your content potential
        </p>

        <Link
          href="/generate"
          className="rounded-xl bg-cyan-50 p-4 ring ring-cyan-50 transition-colors duration-500 ease-in-out hover:bg-cyan-900 hover:text-cyan-50"
        >
          Start generating your article
        </Link>
      </div>
    </div>
  )
}
