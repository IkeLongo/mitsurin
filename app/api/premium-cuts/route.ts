// app/api/premium-cuts/route.ts
import { NextResponse } from "next/server";
import { sanityFetch } from '@/sanity/lib/fetch';
import { premiumCutsQuery } from '@/lib/queries/premium-cuts';
import type { PremiumCut } from '@/types/premium-cuts';

// Function to clean Unicode characters and invisible whitespace
function cleanString(str: string | null | undefined): string {
  if (!str) return '';
  // Remove invisible Unicode characters and normalize whitespace
  return str.replace(/[\u200B-\u200D\uFEFF\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, '').trim();
}

// Function to recursively clean all string properties in an object
function cleanObject<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'string') {
    return cleanString(obj) as T;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => cleanObject(item)) as T;
  }
  
  if (typeof obj === 'object') {
    const cleaned: any = {};
    for (const [key, value] of Object.entries(obj as any)) {
      cleaned[key] = cleanObject(value);
    }
    return cleaned;
  }
  
  return obj;
}

export async function GET() {
  try {
    const premiumCuts = await sanityFetch<PremiumCut[]>({
      query: premiumCutsQuery,
      revalidate: 60 // Cache for 1 minute
    });

    // Clean all the data before returning
    const cleanedPremiumCuts = cleanObject(premiumCuts);

    return NextResponse.json(cleanedPremiumCuts);
  } catch (error) {
    console.error('Failed to fetch premium cuts:', error);
    return NextResponse.json([], { status: 500 });
  }
}