import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Bannière',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Photo de profil :',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'title',
      title: 'Titre :',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description :',
      type: 'string',
    }),
    ]})