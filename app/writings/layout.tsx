import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

interface WritingsLayoutProps {
  children: ReactNode
}
const WritingsLayout = ({ children }: WritingsLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

export default WritingsLayout
