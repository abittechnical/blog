import React from 'react'

export type HeroProps = {}

const Hero = ({}: HeroProps) => {
  return (
    <header className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[37.5rem] pt-20 pb-20 text-center">
        <div className="flex items-center justify-center space-x-3">
          <img
            loading="lazy"
            src="/avatar.svg"
            alt="Logspot"
            className="h-20 w-20"
          />
          <h1 className="font-display text-neutral-12 dark:text-neutralDark-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
            A Bit Technical
          </h1>
        </div>
        <p className="text-neutral-11 dark:text-neutralDark-11 mt-4 text-base leading-7">
          Logspot is an open source change log template made with Nuxt, Vue, and
          Tailwindcss. Subscribe to our newsletter to get the latest updates or
          follow us on
          <a
            className="text-primary underline"
            href="https://twitter.com/fayazara"
            target="_blank"
          >
            twitter
          </a>
        </p>
      </div>
    </header>
  )
}

export default Hero
