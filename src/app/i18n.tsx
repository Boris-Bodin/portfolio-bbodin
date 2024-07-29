import {createInstance} from 'i18next';
import {initReactI18next} from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {i18nConfig} from '@/i18n-config';

const dictionaries = {
    'link-in-bio': () => import('@/locales/en/link-in-bio.json').then((module) => module.default),
    'dashboard': () => import('@/locales/en/dashboard.json').then((module) => module.default),
};
export type I18nTranslationsKey<Namespace> = keyof (typeof dictionaries)[Namespace];
export type I18nTranslations<Namespace = any> = (key: I18nTranslationsKey<Namespace>) => string;

export default async function initTranslations(locale, namespaces, i18nInstance = undefined, resources = undefined) {
    i18nInstance = i18nInstance || createInstance();

    i18nInstance.use(initReactI18next);

    if (!resources) {
        i18nInstance.use(resourcesToBackend((language, namespace) => import(`@/locales/${language}/${namespace}.json`)));
    }

    await i18nInstance.init({
        lng: locale,
        resources,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: resources ? [] : i18nConfig.locales,
    });

    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t,
    };
}
