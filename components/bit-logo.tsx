import React from 'react'
import { cx } from '@/lib/cva'

export type BitLogoProps = {
  className?: string
}

const BitLogo = ({ className }: BitLogoProps) => {
  return (
    <svg className={cx('size-8', className)} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="171.428" y="171.429" width="57.1429" height="57.1429" fill="#F6F6F6" />
      <rect x="171.428" y="228.571" width="57.1429" height="57.1429" fill="#AFAFAF" />
      <rect x="228.572" y="228.571" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="285.714" y="228.571" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="114.286" y="228.571" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="57.1428" y="228.571" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="171.428" y="285.714" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="114.286" y="285.714" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="228.572" y="285.714" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="171.428" y="342.857" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="114.286" y="171.429" width="57.1429" height="57.1429" fill="#AFAFAF" />
      <rect x="57.1428" y="171.429" width="57.1429" height="57.1429" fill="#545454" />
      <rect y="171.429" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="228.572" y="171.429" width="57.1429" height="57.1429" fill="#AFAFAF" />
      <rect x="285.714" y="171.429" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="342.857" y="171.429" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="171.428" y="114.286" width="57.1429" height="57.1429" fill="#AFAFAF" />
      <rect x="114.286" y="114.286" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="114.286" y="57.1429" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="57.1428" y="114.286" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="228.572" y="114.286" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="228.572" y="57.1429" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="285.714" y="114.286" width="57.1429" height="57.1429" fill="#141414" />
      <rect x="171.428" y="57.1429" width="57.1429" height="57.1429" fill="#545454" />
      <rect x="171.428" width="57.1429" height="57.1429" fill="#141414" />
    </svg>
  )
}

export default BitLogo
