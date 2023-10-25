import supportedLanguages from './supportedLanguages'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Locale Block Content',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => defineField(({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.isDefault ? '' : 'translations',
  }))),
})
