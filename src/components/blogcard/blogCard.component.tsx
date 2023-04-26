import {FC} from 'react'
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import {Post} from '@/types/post'
import {urlFor} from '@/lib/client'
import Link from 'next/link'

interface BlogCardProps {
  post: Post
}

export const BlogCard: FC<BlogCardProps> = ({ post }) => (
  <Link className="opacity-100 hover:opacity-80" href={`/posts/${post.slug.current}`}>
    <div className="flex items-start overflow-hidden rounded-lg bg-orange-700/75 shadow-lg shadow-orange-700/70 text-yellow-100">
      <div className="aspect-w-3 aspect-h-2 shrink-0">
        <img
          src={urlFor(post.image && post.image[0]).toString()}
          className="h-96 md:h-auto md:w-48 w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="p-6 text-start truncate">
        <h3 className="text-xl font-semibold truncate">
          {post.title}
        </h3>

        <div className="text-xs text-yellow-400 font-bold">
          {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: fr})}
        </div>

        <div className="mt-4 text-lg truncate font-light">
          {post.description}
        </div>
      </div>
    </div>
  </Link>
)