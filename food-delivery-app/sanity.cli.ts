import { defineCliConfig } from 'sanity/cli'
require('dotenv').config()

export default defineCliConfig({
  api: {
    projectId: `${process.env.PROJECT_ID}`,
    dataset: 'production'
  }
})
