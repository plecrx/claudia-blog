import {FC, ReactNode} from 'react'
import {Gallery, Section} from '@/components'
import {Pagination} from '@/components/pagination/pagination.component'
import {client} from '@/lib/client'

interface PostsProps {
  posts: any[]
  children: ReactNode
}

const Posts: FC<PostsProps> = ({ posts, children }) => {
  return (
    <div>
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">Mon blog</h1>
        </div>
      </Section>

      <Section>
        <Gallery postList={posts} />
      </Section>

      <Section>
        <Pagination urlPrev="" urlNext="" />
      </Section>
    </div>
  )
}

export const getServerSideProps = async () => {
  const postsQuery = '*[_type == "post"]'
  const posts = await client.fetch(postsQuery)

  return {
    props: {
      posts
    }
  }
}

export default Posts