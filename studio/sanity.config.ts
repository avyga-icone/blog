import {defineConfig, isDev } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'avyga-blog',

  projectId: '7bqqhdtu',
  dataset: 'developement',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
