import { allPosts } from 'contentlayer/generated'
import { PostCard } from '@/components/content'
import { Hero } from '@/components/home'

const HomePage = () => {
  return (
    <div className="relative isolate min-h-screen">
      <Hero />
      <section className="relative mx-auto max-w-5xl overflow-hidden px-4 sm:px-6 lg:px-8">
        {allPosts.map((post, i) => (
          <PostCard
            key={i}
            date={post.date as unknown as Date}
            version={post.version}
            title={post.title}
            code={post.body.code}
            slug={`/posts/${post.slug}`}
          />
        ))}
      </section>
    </div>
  )
}
export default HomePage
