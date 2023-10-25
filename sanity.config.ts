import { defineConfig, isDev } from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemas'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'avyga-blog',

  projectId: '7bqqhdtu',
  dataset: isDev ? 'developement' : 'production',

  plugins: [
    deskTool(), 
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
