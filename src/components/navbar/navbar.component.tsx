import {FC} from "react";
import Link from "next/link";
import {AiFillYoutube} from 'react-icons/ai'
import {Section} from '@/components'

export const Navbar: FC = () => {
  return (
    <Section>
      <div className="flex justify-between">
        <Link href="/">
          <div className="flex items-center bg-gradient-to-br from-orange-800 to-orange-700 bg-clip-text text-xl font-bold text-transparent">
            <svg
              className="mr-1 h-10 w-10 stroke-orange-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>

            Claudia Lecurieux
          </div>
        </Link>

        <nav>
          <ul className="flex gap-x-3 font-medium text-black">
            <li className="hover:text-amber-500">
              <Link href="/posts">Blog</Link>
            </li>
            <li className="flex items-center gap-1 hover:text-amber-500">
              <a href="https://www.youtube.com/channel/UCqA5IJ_JgLCvbITPeGUflug">Youtube</a>
              <AiFillYoutube color='red'/>
            </li>
          </ul>
        </nav>
      </div>
    </Section>
  )
}