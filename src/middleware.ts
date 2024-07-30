import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {i18nConfig} from './i18n-config';

import {match as matchLocale} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales: string[] = i18nConfig.locales;

    let languages = new Negotiator({headers: negotiatorHeaders}).languages(locales);

    return matchLocale(languages, locales, i18nConfig.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = i18nConfig.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};
