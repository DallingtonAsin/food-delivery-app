import { ImageRule, NumberRule, StringRule, TextRule, defineField, defineType } from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Dish name',
            type: 'string',
            validation: (rule: StringRule) => rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Dish description',
            type: 'text',
            validation: (rule: TextRule) => rule.required()
        }),
        defineField({
            name: 'image',
            title: 'image of the dish',
            type: 'image',
            validation: (rule: ImageRule) => rule.required()
        }),
        defineField({
            name: 'price',
            title: 'price of the dish',
            type: 'number',
            validation: (rule: NumberRule) => rule.required()
        }),
    ],
})
