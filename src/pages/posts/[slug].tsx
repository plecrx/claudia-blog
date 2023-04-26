import {FC} from 'react'
import {client, urlFor} from '@/lib/client'
import {Post} from '@/types/post'
import {PortableText} from '@portabletext/react'
import {Section} from '@/components'
import {BlogPost} from '@/components/blogpost/blogPost.component'

type StaticProps = {
  params: {
    slug: string
  }
}

interface PostProps {
  post: Post
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format').toString()}
        />
      )
    }
  }
}

const PostPage: FC<PostProps> = ({ post }) => {
  return (
    <Section>
      <BlogPost content={post}>
        <PortableText
          value={post.body}
          components={ptComponents}
        />
      </BlogPost>
    </Section>
  )
}

export const getStaticPaths = async () => {
  const postsQuery = `*[_type == "post"] { 
        slug { 
            current
        }
    }`

  const posts = await client.fetch(postsQuery)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }: StaticProps) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`

  const post = await client.fetch(query)

  return {
    props: {
      post
    }
  }
}

export default PostPage