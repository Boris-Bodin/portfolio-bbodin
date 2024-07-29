'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useTranslation} from 'react-i18next';

export default function LanguageChanger() {
    const {i18n} = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

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
