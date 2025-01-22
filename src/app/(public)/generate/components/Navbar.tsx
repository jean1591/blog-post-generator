import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-cyan-900 p-4">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="flex w-full items-center justify-between text-xl font-extrabold leading-tight tracking-tight text-cyan-50"
        >
          <p>Article Generator</p>
        </Link>
      </div>
    </div>
  )
}
