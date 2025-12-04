// sanity/schemaTypes/premiumCutsType.ts
import {defineField, defineType} from 'sanity'

export const premiumCutsType = defineType({
  name: 'premiumCutsType',
  title: 'Premium Cuts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Cut Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
      description: 'Name of the beef cut (e.g., "Ribeye", "Filet Mignon")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
      description: 'Brief description of the cut and its characteristics',
    }),
    defineField({
      name: 'icon',
      title: 'Icon/Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visual representation of the cut (optional - will fallback to emoji if not provided)',
    }),
    defineField({
      name: 'availability',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Limited Stock', value: 'limited'},
          {title: 'Sold Out', value: 'soldOut'},
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0).precision(2),
      description: 'Price per unit (optional)',
    }),
    defineField({
      name: 'priceUnit',
      title: 'Price Unit',
      type: 'string',
      options: {
        list: [
          {title: 'Per Pound', value: 'per lb'},
          {title: 'Per Piece', value: 'per piece'},
          {title: 'Per Ounce', value: 'per oz'},
          {title: 'Each', value: 'each'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'per lb',
    }),
    defineField({
      name: 'weight',
      title: 'Typical Weight',
      type: 'string',
      description: 'Typical weight or size (e.g., "12 oz", "1.5 lbs", "2-3 lbs")',
    }),
    defineField({
      name: 'cookingNotes',
      title: 'Cooking Notes',
      type: 'text',
      rows: 4,
      description: 'Recommended cooking methods and tips for this cut',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Cut',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this cut as a featured/popular option',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Steak', value: 'steak'},
          {title: 'Roast', value: 'roast'},
          {title: 'Ground', value: 'ground'},
          {title: 'Specialty', value: 'specialty'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'steak',
    }),
    defineField({
      name: 'marbling',
      title: 'Marbling Level',
      type: 'string',
      options: {
        list: [
          {title: 'High', value: 'high'},
          {title: 'Medium', value: 'medium'},
          {title: 'Low', value: 'low'},
        ],
        layout: 'radio',
      },
      description: 'Level of marbling in this cut',
    }),
    defineField({
      name: 'tenderness',
      title: 'Tenderness',
      type: 'string',
      options: {
        list: [
          {title: 'Very Tender', value: 'very tender'},
          {title: 'Tender', value: 'tender'},
          {title: 'Moderate', value: 'moderate'},
        ],
        layout: 'radio',
      },
      description: 'Tenderness level of this cut',
    }),
    defineField({
      name: 'flavor',
      title: 'Flavor Profile',
      type: 'string',
      options: {
        list: [
          {title: 'Intense', value: 'intense'},
          {title: 'Rich', value: 'rich'},
          {title: 'Mild', value: 'mild'},
          {title: 'Buttery', value: 'buttery'},
        ],
        layout: 'radio',
      },
      description: 'Flavor characteristics of this cut',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
      description: 'Order in which this cut appears (lower numbers appear first)',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      readOnly: true,
      description: 'System timestamp when this cut was last changed. Consider using `_updatedAt` from Sanity instead.',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'availability',
      media: 'icon',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: `Status: ${subtitle}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [
        {field: 'displayOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Availability',
      name: 'availabilityDesc',
      by: [
        {field: 'availability', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ]
})
