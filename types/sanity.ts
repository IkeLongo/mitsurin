// Sanity fetch function types
export interface SanityFetchParams<TParams = Record<string, any>> {
  query: string;
  params?: TParams;
  revalidate?: number | false;
  tags?: string[];
}

// Response wrapper for sanity fetch results
export interface SanityFetchResponse<TData> {
  data: TData;
}

// Query parameters type
export type QueryParams = Record<string, any>;

// Revalidation options
export type RevalidateOption = number | false;

// Tag options for caching
export type CacheTags = string[];