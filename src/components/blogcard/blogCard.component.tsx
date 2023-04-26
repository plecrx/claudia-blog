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
  <Link className="opacity-80 hover:opacity-100" href={`/posts/${post.slug.current}`}>
    <div className="overflow-hidden rounded-lg bg-slate-800 bg-orange-700 shadow-lg shadow-orange-700/50 text-yellow-100">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={urlFor(post.image && post.image[0]).toString()}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="px-3 pt-4 pb-6 text-center">
        <h2 className="text-xl font-semibold">
          {post.title}
        </h2>

        <div className="mt-1 text-xs text-yellow-400">
          {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: fr})}
        </div>

        <div className="mt-2 text-sm">
          {post.description}
        </div>
      </div>
    </div>
  </Link>
)