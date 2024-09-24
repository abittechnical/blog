import Link from 'next/link'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
// import { ThemeToggle } from "@/components/theme-toggle"

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-x-2">
          <div className="h-5">
            <svg className="h-full w-auto" viewBox="0 0 93 229" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="46.1543" cy="46.1538" rx="46.1536" ry="46.1538" fill="white" />
              <ellipse cx="46.1544" cy="182.462" rx="46.1536" ry="46.1538" fill="white" />
            </svg>
          </div>
          <div className="h-4">
            <svg className="h-full w-auto" viewBox="0 0 600 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.744 1.33601H33.856L49.536 51H36.096L33.28 41.848H16.256L13.504 51H0.192017L15.744 1.33601ZM30.208 31.352L24.768 13.432L19.328 31.352H30.208Z"
                fill="white"
              />
              <path
                d="M73.2015 1.33601H96.7535C100.551 1.33601 103.666 1.95467 106.098 3.19201C108.572 4.42934 110.364 6.09334 111.474 8.18401C112.626 10.232 113.202 12.536 113.202 15.096C113.202 17.4427 112.775 19.4267 111.922 21.048C111.111 22.6693 109.724 23.9707 107.762 24.952C110.407 25.8053 112.306 27.2347 113.458 29.24C114.61 31.2027 115.186 33.8907 115.186 37.304C115.186 41.4853 113.82 44.8133 111.09 47.288C108.359 49.7627 104.135 51 98.4175 51H73.2015V1.33601ZM101.874 39.352V30.776H86.1935V39.352H101.874ZM99.8255 20.664V12.92H86.1935V20.664H99.8255Z"
                fill="white"
              />
              <path d="M119.705 1.33601H133.145V51H119.705V1.33601Z" fill="white" />
              <path d="M152.499 13.112H137.843V1.33601H180.019V13.112H165.427V51H152.499V13.112Z" fill="white" />
              <path d="M217.499 13.112H202.843V1.33601H245.019V13.112H230.427V51H217.499V13.112Z" fill="white" />
              <path
                d="M249.705 1.33601H288.169V12.92H262.633V20.472H286.121V31.032H262.633V39.416H288.169V51H249.705V1.33601Z"
                fill="white"
              />
              <path
                d="M315.617 52.344C309.729 52.344 304.929 51.192 301.217 48.888C297.547 46.5413 294.881 43.4267 293.217 39.544C291.595 35.6613 290.785 31.2027 290.785 26.168C290.785 21.1333 291.595 16.6747 293.217 12.792C294.881 8.90934 297.547 5.81601 301.217 3.512C304.929 1.16534 309.729 -0.00799561 315.617 -0.00799561C322.699 -0.00799561 328.289 1.67734 332.385 5.048C336.523 8.376 338.785 13.6453 339.169 20.856H325.089V14.072L305.889 14.008V38.392H325.089V30.392H339.553C338.998 37.688 336.673 43.1707 332.577 46.84C328.523 50.5093 322.87 52.344 315.617 52.344Z"
                fill="white"
              />
              <path
                d="M343.889 1.33601H356.881V20.28H374.097V1.33601H387.089V51H374.097V31.16H356.881V51H343.889V1.33601Z"
                fill="white"
              />
              <path
                d="M393.639 1.33601H409.511L424.487 31.48V1.33601H437.415V51H421.351L406.567 21.24V51H393.639V1.33601Z"
                fill="white"
              />
              <path d="M444.08 1.33601H457.52V51H444.08V1.33601Z" fill="white" />
              <path
                d="M487.242 52.344C481.354 52.344 476.554 51.192 472.842 48.888C469.172 46.5413 466.506 43.4267 464.842 39.544C463.22 35.6613 462.41 31.2027 462.41 26.168C462.41 21.1333 463.22 16.6747 464.842 12.792C466.506 8.90934 469.172 5.81601 472.842 3.512C476.554 1.16534 481.354 -0.00799561 487.242 -0.00799561C494.324 -0.00799561 499.914 1.67734 504.01 5.048C508.148 8.376 510.41 13.6453 510.794 20.856H496.714V14.072L477.514 14.008V38.392H496.714V30.392H511.178C510.623 37.688 508.298 43.1707 504.202 46.84C500.148 50.5093 494.495 52.344 487.242 52.344Z"
                fill="white"
              />
              <path
                d="M527.057 1.33601H545.169L560.849 51H547.409L544.593 41.848H527.569L524.817 51H511.505L527.057 1.33601ZM541.521 31.352L536.081 13.432L530.641 31.352H541.521Z"
                fill="white"
              />
              <path d="M564.392 1.33601H577.32V39.416H599.464V51H564.392V1.33601Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative m-1 flex py-1 px-2 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
