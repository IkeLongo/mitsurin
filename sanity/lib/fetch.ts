import { draftMode } from 'next/headers';
import { client } from './client';
import type { SanityFetchParams, QueryParams } from '@/types/sanity';

const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: SanityFetchParams<QueryParams>): Promise<QueryResponse> {
  const draft = await draftMode();
  const isDraftMode = draft.isEnabled;
  
  // For visual editing, use a more balanced approach
  const perspective = isDraftMode ? 'previewDrafts' : 'published';

  const queryClient = client.withConfig({
    perspective,
    ...(isDraftMode && token && {
      token,
      ignoreBrowserTokenWarning: true,
    }),
  });

  return queryClient.fetch<QueryResponse>(query, params, {
    // Use more balanced caching for visual editing
    ...(revalidate !== false && { next: { revalidate } }),
    ...(tags.length && { next: { tags } }),
  });
}