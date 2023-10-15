import { ImageRule, NumberRule, StringRule, TextRule, defineField, defineType } from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurants',
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
            title: 'Restaurant description',
            type: 'text',
            validation: (rule: TextRule) => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'image of the restaurant',
            type: 'image',
            validation: (rule: ImageRule) => rule.required()
        }),
        defineField({
            name: 'lat',
            title: 'latitude of the restaurant',
            type: 'number',
            validation: (rule: NumberRule) => rule.required()
        }),
        defineField({
            name: 'lng',
            title: 'longitude of the restaurant',
            type: 'number',
            validation: (rule: NumberRule) => rule.required()
        }),
        defineField({
            name: 'address',
            title: 'Restaurant address',
            type: 'string',
            validation: (rule: StringRule) => rule.required()
        }),
        defineField({
            name: 'rating',
            title: 'Enter a number between 1 and 5',
            type: 'number',
            validation: (rule: NumberRule) => rule.required().min(1).max(5).error("Please enter a number between 1 and 5")
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Category',
            validation: rule => rule.required(),
            type: 'reference',
            to: [{ type: 'category' }],
        }),
        defineField({
            name: 'dishes',
            title: 'Dishes',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'dish' }] }],
        }),
    ],
})
