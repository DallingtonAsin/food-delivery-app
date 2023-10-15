import { ImageRule, StringRule, TextRule, defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (rule: StringRule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Category description',
      type: 'text',
      validation: (rule: TextRule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'image of the category',
      type: 'image',
      validation: (rule: ImageRule) => rule.required()
    }),
  ],
})
