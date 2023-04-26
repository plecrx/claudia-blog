import {FC, ReactNode} from 'react'
import {urlFor} from '@/lib/client'
import {Post} from '@/types/post'

interface PostContentProps {
  content: Post
  children: ReactNode
}

export const PostContent: FC<PostContentProps> = ({ content, children }) => (
  <div className="mx-auto mt-5 max-w-prose">
    <div className="aspect-w-3 aspect-h-2">

      <img
        src={urlFor(content.image && content.image[0]).toString()}
        className="h-full w-full rounded-lg object-cover object-center"
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {children}
    </div>
  </div>
)