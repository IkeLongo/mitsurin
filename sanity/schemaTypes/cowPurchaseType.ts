// sanity/schemaTypes/cowPurchaseType.ts
import {defineField, defineType} from 'sanity'

export const cowPurchaseType = defineType({
  name: 'cowPurchaseType',
  title: 'Cow Purchase Options',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Purchase Option Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
      description: 'Name of the purchase option (e.g., "Whole Cow", "Half Cow", "Quarter Cow")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
      description: 'Detailed description of what this purchase option includes',
    }),
    defineField({
      name: 'icon',
      title: 'Icon/Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visual representation of the purchase option (optional)',
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
          {title: 'Pre-Order', value: 'preOrder'},
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price',
      type: 'number',
      validation: (Rule) => Rule.min(0).precision(2),
      description: 'Base price for this purchase option',
    }),
    defineField({
      name: 'priceUnit',
      title: 'Price Unit',
      type: 'string',
      options: {
        list: [
          {title: 'Per Pound (Live Weight)', value: 'per lb live'},
          {title: 'Per Pound (Hanging Weight)', value: 'per lb hanging'},
          {title: 'Per Pound (Processed Weight)', value: 'per lb processed'},
          {title: 'Flat Rate', value: 'flat rate'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'per lb hanging',
    }),
    defineField({
      name: 'processingState',
      title: 'Processing State',
      type: 'string',
      options: {
        list: [
          {title: 'Live (Delivered to Butcher)', value: 'live'},
          {title: 'Already Processed', value: 'processed'},
          {title: 'Both Options Available', value: 'both'},
        ],
        layout: 'radio',
      },
      initialValue: 'live',
      description: 'Whether this is sold live or already processed',
    }),
    defineField({
      name: 'estimatedWeight',
      title: 'Estimated Weight Range',
      type: 'string',
      description: 'Estimated weight range (e.g., "400-500 lbs", "200-250 lbs")',
    }),
    defineField({
      name: 'estimatedYield',
      title: 'Estimated Meat Yield',
      type: 'string',
      description: 'Expected amount of meat after processing (e.g., "280-350 lbs", "140-175 lbs")',
    }),
    defineField({
      name: 'deliveryZone',
      title: 'Delivery Zone',
      type: 'object',
      fields: [
        defineField({
          name: 'within100Miles',
          title: 'Within 100 Miles of Hondo',
          type: 'boolean',
          initialValue: true,
          description: 'Available for delivery within 100 miles',
        }),
        defineField({
          name: 'beyond100Miles',
          title: 'Beyond 100 Miles Available',
          type: 'boolean',
          initialValue: true,
          description: 'Available for delivery beyond 100 miles (with additional fees)',
        }),
        defineField({
          name: 'deliveryFeePerMile',
          title: 'Delivery Fee Per Mile (Beyond 100 Miles)',
          type: 'number',
          validation: (Rule) => Rule.min(0).precision(2),
          description: 'Additional fee per mile beyond the 100-mile radius',
        }),
      ],
    }),
    defineField({
      name: 'freezerSpaceRequired',
      title: 'Freezer Space Required',
      type: 'string',
      description: 'Recommended freezer space needed (e.g., "16-20 cubic feet", "8-10 cubic feet")',
    }),
    defineField({
      name: 'processingTime',
      title: 'Processing Time',
      type: 'string',
      description: 'Time from purchase to ready for pickup (e.g., "2-3 weeks", "14-21 days")',
    }),
    defineField({
      name: 'depositRequired',
      title: 'Deposit Required',
      type: 'number',
      validation: (Rule) => Rule.min(0).precision(2),
      description: 'Deposit amount required to secure the purchase',
    }),
    defineField({
      name: 'processingIncluded',
      title: 'Processing Included',
      type: 'boolean',
      initialValue: false,
      description: 'Whether processing costs are included in the base price',
    }),
    defineField({
      name: 'processingCost',
      title: 'Processing Cost',
      type: 'number',
      validation: (Rule) => Rule.min(0).precision(2),
      description: 'Additional processing cost if not included in base price',
    }),
    defineField({
      name: 'butcherRequirements',
      title: 'Butcher Requirements (For Live Delivery)',
      type: 'object',
      fields: [
        defineField({
          name: 'required',
          title: 'Customer Must Provide Butcher',
          type: 'boolean',
          description: 'Whether customer needs to arrange their own butcher for live delivery',
        }),
        defineField({
          name: 'maxDistanceFromHondo',
          title: 'Maximum Distance from Hondo (Miles)',
          type: 'number',
          description: 'Maximum distance the butcher can be from Hondo for live delivery',
        }),
        defineField({
          name: 'requirements',
          title: 'Butcher Requirements',
          type: 'array',
          of: [{type: 'string'}],
          description: 'List of requirements (e.g., "USDA certified", "Accepts live cattle", "Scheduling flexibility")',
        }),
        defineField({
          name: 'additionalNotes',
          title: 'Additional Notes',
          type: 'text',
          description: 'Additional information about butcher requirements or the live delivery process',
        }),
      ],
    }),
    defineField({
      name: 'includes',
      title: 'What\'s Included',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of what\'s included (e.g., "All standard cuts", "Organ meats", "Bones for broth")',
    }),
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
      rows: 3,
      description: 'Any additional information or special conditions',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Option',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this as a popular or recommended option',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
      description: 'Order in which this option appears (lower numbers appear first)',
    }),
    defineField({
      name: 'minimumNotice',
      title: 'Minimum Notice Required',
      type: 'string',
      description: 'Minimum advance notice needed (e.g., "2 weeks", "1 month")',
    }),
    defineField({
      name: 'availableSeasons',
      title: 'Available Seasons',
      type: 'array',
      of: [{
        type: 'string',
        options: {
          list: [
            {title: 'Spring', value: 'spring'},
            {title: 'Summer', value: 'summer'},
            {title: 'Fall', value: 'fall'},
            {title: 'Winter', value: 'winter'},
            {title: 'Year Round', value: 'yearRound'},
          ]
        }
      }],
      description: 'Seasons when this option is typically available',
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