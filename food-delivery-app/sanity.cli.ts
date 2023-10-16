import { defineCliConfig } from 'sanity/cli'
import { projectId } from './src/environment'

export default defineCliConfig({
  api: {
    projectId: `${projectId}`,
    dataset: 'production'
  }
})
