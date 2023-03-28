'use client'
import React from 'react'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export type ColorModeToggleProps = {}

const ColorModeToggle = ({}: ColorModeToggleProps) => {
  const disableTransitionsTemporarily = () => {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  const toggleMode = () => {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }
  return (
    <button
      type="button"
      onClick={toggleMode}
      className="ring-neutralDark-6 shadow-neutral-12/50 dark:bg-neutralDark-3/90 dark:ring-neutralDark-6/75
        dark:hover:ring-neutralDark-7 bg-neutralDark-1 group fixed bottom-4 right-4 z-50 inline-flex h-11 w-11
        items-center justify-center rounded-full px-3 py-2 shadow-lg ring-1 transition"
    >
      <SunIcon
        className="text-neutralDark-11 hidden h-6 w-6 transition  dark:block"
        aria-hidden="true"
      />
      <MoonIcon
        className="text-primaryDark-9/75 block h-6 w-6 transition dark:hidden"
        aria-hidden="true"
      />
    </button>
  )
}

export default ColorModeToggle
