import {FC} from 'react'
import {BlogCard} from '@/components'
import {Post} from '@/types/post'

interface GalleryProps {
  postList: Post[]
}

export const Gallery: FC<GalleryProps> = ({ postList }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {postList.map((elt) => (
      <BlogCard key={elt._id} post={elt} />
    ))}
  </div>
)