import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
} from 'react-icons/pi'

import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="bottom-0 bg-gray-200 p-4">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <div className="flex items-center justify-start gap-1 font-extrabold leading-tight tracking-tight text-gray-950">
          <p>Made with ❤️ from 🇫🇷 by</p>
          <Link href="https://jeanrobertou.com" target="_blank">
            Jean Robertou
          </Link>
        </div>

        <div className="flex items-center justify-center gap-x-2 sm:justify-end">
          <Link
            href="https://jeanrobertou.com"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiIdentificationBadge className="h-8 w-8" />
          </Link>
          <Link
            href="https://github.com/jean1591"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiGithubLogo className="h-8 w-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/robertoujean/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiLinkedinLogo className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </div>
  )
}
