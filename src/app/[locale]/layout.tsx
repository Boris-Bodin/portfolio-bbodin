import React from 'react';
import {Metadata} from 'next';
import {type Locale} from '@/i18n-config';

import '@/styles/styles.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import theme from '../../design-system/theme';
import {CssBaseline, Experimental_CssVarsProvider} from '@mui/material';
import TranslationProvider from '@/shared/components/TranslationProvider';
import initTranslations, {NamespaceKey} from '@/app/i18n';

export const metadata: Metadata = {
    title: 'Boris Bodin • Website',
    description:
        'Software Engineer. Web creator and educator about Code. I like to create things and help people who want to learn more and faster.',
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: {locale: Locale};
}

const i18nNamespaces: Array<NamespaceKey> = ['link-in-bio', 'dashboard'];

export default async function RootLayout({children, params}: RootLayoutProps) {
    const {resources} = await initTranslations(params.locale, i18nNamespaces);

    return (
        <html lang={params.locale}>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                {/*<meta name="robots" content="noindex, nofollow" />*/}
                <link rel='icon' sizes='16x16' href='/static/images/favicon-16x16.png' />
                <link rel='icon' sizes='32x32' href='/static/images/favicon-32x32.png' />
                <link rel='icon' href='/static/images/favicon.ico' />
            </head>
            <body suppressHydrationWarning={true}>
                <React.StrictMode>
                    <AppRouterCacheProvider>
                        <Experimental_CssVarsProvider theme={theme}>
                            <CssBaseline />
                            <TranslationProvider namespaces={i18nNamespaces} locale={params.locale} resources={resources}>
                                {children}
                            </TranslationProvider>
                        </Experimental_CssVarsProvider>
                    </AppRouterCacheProvider>
                </React.StrictMode>
            </body>
        </html>
    );
}
