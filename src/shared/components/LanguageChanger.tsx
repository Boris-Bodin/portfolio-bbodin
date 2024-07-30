'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import {ChangeEvent} from 'react';

export default function LanguageChanger() {
    const {i18n} = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    function setCookie(newLocale: any) {
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        setCookie(newLocale);
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        router.refresh();
    };

    return (
        <select onChange={handleChange} value={currentLocale}>
            <option value='en'>English</option>
            <option value='fr'>French</option>
        </select>
    );
}
