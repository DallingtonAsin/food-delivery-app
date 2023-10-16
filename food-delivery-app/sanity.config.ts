import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
require('dotenv').config()

export default defineConfig({
  name: 'default',
  title: 'food delivery app',

  projectId: `${process.env.PROJECT_ID}`,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
