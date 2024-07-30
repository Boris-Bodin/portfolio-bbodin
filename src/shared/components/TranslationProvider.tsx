'use client';

import {I18nextProvider} from 'react-i18next';
import initTranslations, {NamespaceKey} from '@/app/i18n';
import {Locale} from '@/i18n-config';
import {createInstance, Resource} from 'i18next';
import React from 'react';

interface TranslationProviderProps {
    children: React.ReactNode;
    locale: Locale;
    namespaces: Array<NamespaceKey>;
    resources: Resource;
}

export default function TranslationProvider({children, locale, namespaces, resources}: TranslationProviderProps) {
    const i18n = createInstance();

    initTranslations(locale, namespaces, i18n, resources);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
