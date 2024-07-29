export const i18nConfig = {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
};

export type Locale = (typeof i18nConfig)['locales'][number];
