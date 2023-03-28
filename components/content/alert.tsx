import React from 'react'
import { cva } from 'class-variance-authority'

const alertClasses = cva(
  'relative my-8 rounded-lg rounded-bl-sm border-l-4 p-4',
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-3 border-primary-7 dark:bg-primaryDark-3 dark:border-primaryDark [&_#alert-title]:text-primary-12',
          '[&_#alert-description]:text-primary-11 dark:[&_#alert-title]:text-primaryDark-12',
          'dark:[&_#alert-description]:text-primaryDark-11',
        ],
        info: [
          'bg-info-3 border-info-7 dark:bg-infoDark-3 dark:border-infoDark [&_#alert-title]:text-info-12',
          '[&_#alert-description]:text-info-11 dark:[&_#alert-title]:text-infoDark-12',
          'dark:[&_#alert-description]:text-infoDark-11',
        ],
        warning: [
          'bg-warning-3 border-warning-7 dark:bg-warningDark-3 dark:border-warningDark [&_#alert-title]:text-warning-12',
          '[&_#alert-description]:text-warning-11 dark:[&_#alert-title]:text-warningDark-12',
          'dark:[&_#alert-description]:text-warningDark-11',
        ],
        success: [
          'bg-success-3 border-success-7 dark:bg-successDark-3 dark:border-successDark [&_#alert-title]:text-success-12',
          '[&_#alert-description]:text-success-11 dark:[&_#alert-title]:text-successDark-12',
          'dark:[&_#alert-description]:text-successDark-11',
        ],
        danger: [
          'bg-danger-3 border-danger-7 dark:bg-dangerDark-3 dark:border-dangerDark [&_#alert-title]:text-danger-12',
          '[&_#alert-description]:text-danger-11 dark:[&_#alert-title]:text-dangerDark-12',
          'dark:[&_#alert-description]:text-dangerDark-11',
        ],
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

export type AlertProps = {
  variant?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
  icon: JSX.Element
  title: string
  description: string
}

const Alert = ({ variant, icon, title, description }: AlertProps) => {
  return (
    <div className={alertClasses({ variant })}>
      <span
        id="icon-container"
        className="bg-neutral-1 dark:bg-neutralDark-1 absolute top-0 left-0 flex h-10 w-10 -translate-y-[50.5%]
        translate-x-[calc(-50%-1.5px)] items-center justify-center rounded-full"
      >
        {icon}
      </span>
      <div>
        <h3 id="alert-title">{title}</h3>
        <p id="alert-description">{description}</p>
      </div>
    </div>
  )
}

export default Alert
