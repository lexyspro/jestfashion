import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Women', value: 'women' },
          { title: 'Men', value: 'men' },
          { title: 'Kids', value: 'kids' },
          { title: 'Unisex', value: 'unisex' },
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Clothing', value: 'clothing' },
          { title: 'Footwear', value: 'footwear' },
          { title: 'Bags', value: 'bags' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Tops', value: 'tops' },
          { title: 'Bottoms', value: 'bottoms' },
          { title: 'Dresses', value: 'dresses' },
          { title: 'Outerwear', value: 'outerwear' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price ($)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'isOnPromotion',
      title: 'Is on Promotion?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price ($)',
      description: 'The price before the promotion discount.',
      type: 'number',
      hidden: ({ document }) => !document?.isOnPromotion,
    }),
    defineField({
      name: 'promotionPercent',
      title: 'Discount Percentage (%)',
      description: 'e.g. enter 20 for a 20% discount.',
      type: 'number',
      hidden: ({ document }) => !document?.isOnPromotion,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Homepage?',
      description: 'Show this product in the "Featured This Season" section.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isNewArrival',
      title: 'New Arrival?',
      description: 'Show this product in the "New Arrivals" section.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      description: 'e.g. luxury, local, kente, promo',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
})
