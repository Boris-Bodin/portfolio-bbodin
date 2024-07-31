'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import {SelectChangeEvent} from '@mui/material/Select/SelectInput';
import {FormControl, MenuItem, Select} from '@mui/material';

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

    const handleChange = (e: SelectChangeEvent<string>) => {
        const newLocale = e.target.value;

        setCookie(newLocale);
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        router.refresh();
    };

    return (
        <FormControl variant='outlined' size='small' sx={{minWidth: 48}}>
            <Select
                value={currentLocale}
                onChange={handleChange}
                displayEmpty
                sx={{
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '.MuiSvgIcon-root': {
                        color: 'white',
                    },
                    '&& .MuiSelect-select': {
                        color: 'white',
                    },
                    ':hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'silver',
                        },
                    },
                }}
                variant={'outlined'}>
                <MenuItem value='en'>
                    <span role='img' aria-label='English'>
                        🇺🇸
                    </span>
                </MenuItem>
                <MenuItem value='fr'>
                    <span role='img' aria-label='French'>
                        🇫🇷
                    </span>
                </MenuItem>
            </Select>
        </FormControl>
    );
}
