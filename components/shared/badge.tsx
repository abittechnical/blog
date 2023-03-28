import React from 'react'
import { cx } from 'class-variance-authority'

export type BadgeProps = {
  label: string
  className?: string
  status?:
    | 'deep-dive'
    | 'tutorial'
    | 'changelog'
    | 'announcement'
    | 'content-review'
}

const Badge = ({ label, className }: BadgeProps) => {
  const baseStyles = [
    'inline-flex items-center rounded border border-primary-8 bg-primary-3 px-2.5 py-0.5 text-xs font-medium',
    'text-primary-12 dark:text-primaryDark-12 dark:bg-primaryDark-3 dark:border-primaryDark-8',
  ]
  return (
    <span className={cx(baseStyles, className)}>
      <svg
        className="text-primary-10 dark:text-primaryDark-10 -ml-0.5 mr-1.5 h-2 w-2"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="3" />
      </svg>
      {label}
    </span>
  )
}

export default Badge
