import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Legal Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'content',
      type: 'localeBlockContent',
      validation: Rule => Rule.required()
    }),
    
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
