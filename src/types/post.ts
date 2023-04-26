import {SanityObject} from '@/types/sanityObject'
import {Image} from '@/types/image'

export type Post = SanityObject & {
  title: string
  description: string
  slug: {
    _type: string,
    current: string
  }
  publishedAt: Date
  body: any[]
  image: Image[]
}