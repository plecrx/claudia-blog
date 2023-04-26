import {FC} from 'react'
import {Section} from '@/components'
import {Image} from '@/types/image'
import {urlFor} from '@/lib/client'

interface HeroBannerProps {
  bannerData: {
    title: string
    description: string
    image: Image
  }
}

export const HeroBanner: FC<HeroBannerProps> = ({ bannerData: { title, description, image}}) => (
  <Section>
    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
      <div className="shrink-0">
        <img
          src={urlFor(image).toString()}
          className="rounded-br-lg rounded-tl-lg w-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 text-black">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="mt-6 text-xl leading-9">
          {description}
        </p>

        <div className="flex items-center -ml-2.5 hover:translate-x-0.5 hover:text-amber-500 duration-200 font-bold cursor-pointer">
          <a href="https://www.youtube.com/channel/UCqA5IJ_JgLCvbITPeGUflug">
            <img title="Ma chaîne youtube" src="youtube-icon.png" width={64}/>
          </a>
          Visiter ma chaîne Youtube

        </div>
      </div>
    </div>

  </Section>
)