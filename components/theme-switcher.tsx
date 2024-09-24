import React from 'react'

export type ThemeSwitcherProps = {}

const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-full border border-zinc-300 py-0.5 px-1"
      aria-label="Toggle Theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-sun bg-accent text-accent-foreground dark:text-muted-foreground size-7 rounded-full p-1.5 dark:bg-transparent"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-moon text-muted-foreground dark:bg-accent dark:text-accent-foreground size-7 rounded-full p-1.5"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256">
        <path d="M175.84,111.54a8,8,0,0,0-4.56-5.7l-50-22.43L135,25.85a8,8,0,0,0-13.65-7.28L26.13,121.42a8,8,0,0,0,2.59,12.73l50,22.44L65,214.15a8,8,0,0,0,13.65,7.28l95.2-102.85A8,8,0,0,0,175.84,111.54ZM87.62,188.21l8.16-34.36a8,8,0,0,0-4.5-9.15L45.43,124.12l66.95-72.33-8.16,34.36a8,8,0,0,0,4.5,9.15l45.84,20.58Zm151.53,24.21-36-72a8,8,0,0,0-14.31,0l-36,72a8,8,0,0,0,14.31,7.16L176.94,200h38.11l9.79,19.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM184.94,184,196,161.89,207.05,184Z"></path>
      </svg>
    </button>
  )
}

export default ThemeSwitcher
