import {FC} from 'react'

interface PaginationProps {
  urlPrev: string
  urlNext: string
}

export const Pagination: FC<PaginationProps> = ({ urlPrev, urlNext }) => (
  <div className="flex justify-center gap-8">
    {urlPrev && <a href={urlPrev}>← Newer Posts</a>}
    {urlNext && <a href={urlNext}>Older Posts →</a>}
  </div>
)