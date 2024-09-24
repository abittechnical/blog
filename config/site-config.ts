interface NavItem {
  name: string
  href: string
  disabled?: boolean
}

const navItems: Array<NavItem> = [
  {
    name: 'Writings',
    href: '/writings',
  },
  {
    name: 'UI Snippets',
    href: '/ui-snippets',
    disabled: true,
  },
  {
    name: 'About',
    href: '/about',
    disabled: true,
  },
]

export const siteConfig = {
  title: 'Your Company',
  description: 'Your Company Description',
  navigation: navItems,
}
