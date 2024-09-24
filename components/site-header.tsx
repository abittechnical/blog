import Link from 'next/link'
import ThemeSwitcher from '@/components/theme-switcher'
import BitLogo from '@/components/bit-logo'
import { siteConfig } from '@/config/site-config'

const { navigation } = siteConfig
const navItems = {
  '/blog': {
    name: 'articles',
  },
  '/notes': {
    name: 'notes',
  },
  '/about': {
    name: 'about',
  },
}

const MobileMenuTrigger = () => {
  // TODO: Mobile Menu Trigger
  return (
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="bg-site">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* FIXME: there is no index route so href is just a hash */}
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">A Bit Technical</span>
          <BitLogo className="size-10" />
        </Link>
        <MobileMenuTrigger />
        {/* TODO: Site Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          {navigation.map(navItem => (
            <Link
              href={!navItem.disabled ? navItem.href : '#'}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {navItem.name}
            </Link>
          ))}

          {/* TODO: add theme switcher */}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
