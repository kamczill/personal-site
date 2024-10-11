import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from "next/server";
 
let locales = ['en', 'pl']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    // Get the Accept-Language header from the request
    const acceptLanguage = request.headers.get('accept-language');
    
    // Default to 'en-US' if no header is available
    if (!acceptLanguage) {
      return 'en';
    }
  
    // Parse the Accept-Language header, extracting the languages
    const acceptedLanguages = acceptLanguage.split(',').map(lang => {
      return lang.split(';')[0]; // Extract language code, ignore quality factor
    });
  
    // Define the supported locales  
    // Find the first matching locale from the accepted languages
    const matchedLocale = acceptedLanguages.find(lang => locales.includes(lang));
  
    // If a supported locale is found, return it, otherwise default to 'en-US'
    return matchedLocale || 'en';
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}