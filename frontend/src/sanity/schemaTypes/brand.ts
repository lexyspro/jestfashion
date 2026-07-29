import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'brand',
  title: 'Brand / Designer',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
    }),
    defineField({
      name: 'isLocalDesigner',
      title: 'Is Local Designer?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'website',
      title: 'Website / Social Link',
      type: 'url',
    }),
  ],
})
