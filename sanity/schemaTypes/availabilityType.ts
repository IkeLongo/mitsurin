// sanity/schemaTypes/availabilityType.ts
import {defineField, defineType} from 'sanity'

export const availabilityType = defineType({
  name: 'availabilityType',
  title: 'Availability',
  type: 'document', // use "object" instead if you want to embed it inside another doc
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: '2025 Season Availability',
      description: 'Main heading displayed on the availability page',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 2,
      initialValue: 'Check our current cattle availability and reserve your premium Wagyu beef from our Texas ranch.',
      description: 'Subtitle text displayed under the main heading',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Current Availability',
      description: 'Title displayed above the availability stats',
    }),
    defineField({
      name: 'totalCows',
      title: 'Total Cattle Available',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'soldCows',
      title: 'Cattle Sold',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    // NOTE: This is "computed" logically, but Sanity won't auto-calc it.
    // We'll typically compute it in GROQ on the frontend.
    defineField({
      name: 'availableCows',
      title: 'Available Cattle',
      type: 'number',
      readOnly: true,
      description: 'Computed as totalCows - soldCows in your frontend/GROQ.',
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Limited Stock', value: 'limited'},
          {title: 'Sold Out', value: 'soldOut'},
        ],
        layout: 'radio', // or 'dropdown'
      },
    }),

    defineField({
      name: 'estimatedRestockDate',
      title: 'Estimated Restock Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),

    // You *can* create your own lastUpdated field, but Sanity already gives `_updatedAt`.
    // Here we set an initial value on create; later updates are typically handled with `_updatedAt`.
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      readOnly: true,
      description: 'System timestamp when this doc was last changed. Consider using `_updatedAt` from Sanity instead.',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'publicMessage',
      title: 'Public Message',
      type: 'text',
      rows: 3,
      description: 'Custom note your customers will see (e.g., “Next shipment arriving mid-March”).',
    }),
  ],
})
