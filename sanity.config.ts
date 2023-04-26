import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'Claudia-blog',

  projectId: 'u2696c44',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
