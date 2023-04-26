import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image :',
      type: 'array',
      of: [{ type: 'image' }],
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
    defineField({
      name: 'slug',
      title: 'Tag :',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publié à :',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Contenu :',
      type: 'blockContent',
    }),
  ],
})
