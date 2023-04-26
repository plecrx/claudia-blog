import {ClientConfig, createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
  projectId: 'u2696c44',
  dataset: 'production',
  apiVersion: '2023-04-26',
  useCdn: true,
  token: process.env.SANITY_SECRET_TOKEN
}

export const client = createClient(config)

export const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)