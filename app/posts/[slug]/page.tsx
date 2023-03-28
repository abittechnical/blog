import { allPosts } from 'contentlayer/generated'
import { Article } from '@/components/content'
import { notFound } from 'next/navigation'

type PostPageProps = ReturnType<typeof generateStaticParams>
// @ts-ignore
const PostPage = ({ params }) => {
  console.log('from PostPage', params)
  const post = allPosts.find(post => post.slug === params.slug)
  if (!post) {
    return notFound()
  }
  return <Article code={post.body.code} />
}

export default PostPage

export const generateStaticParams = async () => {
  const paths = allPosts.map(post => ({ params: { slug: post.slug } }))
  console.log(paths)
  return allPosts.map(post => ({ slug: post.slug }))
}
