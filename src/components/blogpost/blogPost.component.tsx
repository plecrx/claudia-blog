import {FC, ReactNode} from 'react'
import {PostContent, PostHeader, Section} from '@/components'
import {AppConfig} from '@/utils/appconfig'
import {Post} from '@/types/post'

interface BlogPostProps {
  content: Post
  children: ReactNode
}

export const BlogPost: FC<BlogPostProps> = ({ content, children }) => (
  <Section>
    <PostHeader content={content} author={AppConfig.author} />

    <PostContent content={content}>{children}</PostContent>
  </Section>
)