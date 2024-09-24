import type { ReactNode } from 'react'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-4 mt-8 max-w-xl antialiased lg:mx-auto">
      <div className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">{children}</div>
    </div>
  )
}

export default BlogLayout
