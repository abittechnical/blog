import { cx } from '@/lib/cva'

const tabs = [
  { name: 'Articles', href: '#', current: true },
  { name: 'Notes', href: '#', current: false },
]

function Tabs() {
  return (
    <div className="mt-10 mb-5">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          defaultValue={tabs.find(tab => tab.current).name}
          className="block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
        >
          {tabs.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map(tab => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={cx(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
  {
    id: 2,
    title: 'Mastering the Art of Remote Work',
    href: '#',
    description:
      'Explore proven strategies to enhance productivity and maintain work-life balance in a remote environment. From setting up an ergonomic home office to effective time management techniques, this guide covers essential tips for thriving in the world of remote work.',
    date: 'Sep 22, 2023',
    datetime: '2023-09-22',
    category: { title: 'Productivity', href: '#' },
    author: {
      name: 'Emily Chen',
      role: 'Senior HR Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'The Future of AI in Healthcare',
    href: '#',
    description:
      'Dive into the revolutionary ways artificial intelligence is transforming the healthcare industry. From early disease detection to personalized treatment plans, discover how AI is improving patient outcomes and streamlining medical processes.',
    date: 'Nov 10, 2023',
    datetime: '2023-11-10',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Dr. Alex Johnson',
      role: 'Chief Medical Officer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Sustainable Living: Small Changes, Big Impact',
    href: '#',
    description:
      'Learn how to incorporate eco-friendly practices into your daily life without breaking the bank. This comprehensive guide offers practical tips on reducing your carbon footprint, from energy-saving hacks to sustainable shopping habits.',
    date: 'Jan 5, 2024',
    datetime: '2024-01-05',
    category: { title: 'Lifestyle', href: '#' },
    author: {
      name: 'Olivia Green',
      role: 'Environmental Consultant',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Cybersecurity Essentials for Small Businesses',
    href: '#',
    description:
      "Protect your small business from cyber threats with this essential guide. Covering topics from basic password hygiene to advanced encryption techniques, learn how to safeguard your company's data and build customer trust in the digital age.",
    date: 'Feb 18, 2024',
    datetime: '2024-02-18',
    category: { title: 'Security', href: '#' },
    author: {
      name: 'Kevin Lee',
      role: 'Information Security Analyst',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const WritingsIndexPage = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        <Tabs />
        <div className="space-y-16 pt-10 sm:mt-16 sm:pt-16">
          {posts.map(post => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              {/* FIXME: Avatar and author, probably don't need this for just me */}
              {/*<div className="relative mt-8 flex items-center gap-x-4">*/}
              {/*  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />*/}
              {/*  <div className="text-sm leading-6">*/}
              {/*    <p className="font-semibold text-gray-900">*/}
              {/*      <a href={post.author.href}>*/}
              {/*        <span className="absolute inset-0" />*/}
              {/*        {post.author.name}*/}
              {/*      </a>*/}
              {/*    </p>*/}
              {/*    <p className="text-gray-600">{post.author.role}</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
)
export default WritingsIndexPage
