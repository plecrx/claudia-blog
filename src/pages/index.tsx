import {FC} from 'react'
import {HeroBanner, RecentPosts} from '@/components'
import { client } from '@/lib/client'
import {Post} from '@/types/post'

interface HomeProps {
  posts: Post[],
  banner: any
}


const Home: FC<HomeProps> = ({ posts, banner }) => {
  return (
    <div>
      <HeroBanner bannerData={banner[0]} />
      <RecentPosts posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const postsQuery = '*[_type == "post"] | order(publishedAt desc)'
  const posts = await client.fetch(postsQuery)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      posts,
      banner: bannerData
    }
  }
}

export default Home