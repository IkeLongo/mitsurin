import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Keep disabled for visual editing
  perspective: 'published',
  stega: { 
    enabled: true,
    studioUrl: '/studio' 
  },
})
