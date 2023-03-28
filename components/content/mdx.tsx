'use client'
import { useMDXComponent } from 'next-contentlayer/hooks'

export type MdxProps = {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component />
}

export default Mdx
