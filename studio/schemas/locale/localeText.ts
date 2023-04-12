import supportedLanguages from './supportedLanguages'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Locale Text',
  name: 'localeText',
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
    type: 'text',
    fieldset: lang.isDefault ? '' : 'translations',
  }))),
})
