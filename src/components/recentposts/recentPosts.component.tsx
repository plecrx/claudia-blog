import {FC} from 'react'
import {Gallery, Section} from '@/components'
import Link from 'next/link'

interface RecentPostsProps {
  posts: any[]
}

export const RecentPosts: FC<RecentPostsProps> = ({ posts }) => {
  const truncPostList = posts.slice(0, 3)

  return <Section>
    <div className="mb-6 text-2xl font-bold">
      <div className="flex items-baseline justify-between">
        <div className="text-black">
          <strong>Publications</strong> récentes
        </div>

        <div className="text-sm hover:scale-105 duration-300">
          <Link href="/posts">Voir toutes mes publications →</Link>
        </div>
      </div>
    </div>

    <Gallery postList={truncPostList} />
  </Section>
}
