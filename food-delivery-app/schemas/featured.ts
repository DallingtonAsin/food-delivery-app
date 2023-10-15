import { ImageRule, NumberRule, StringRule, TextRule, defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured restaurants',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Restaurant name',
            type: 'string',
            validation: (rule: StringRule) => rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (rule: TextRule) => rule.required()
        }),
        defineField({
            name: 'restaurants',
            title: 'Restaurants',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
        }),
    ],
})