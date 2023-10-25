import { isDev } from 'sanity'
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7bqqhdtu',
    dataset: isDev ? 'developement' : 'production',
  }
})
