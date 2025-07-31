import {useLocale} from 'next-intl';
import React from 'react'
import LocaleSelect from './localSwitcherSelect';
import { locales } from '../../i18n/config';
import { SelectItem } from '../ui/select';

function LocaleSwitcher() {
    const locale = useLocale();
  return (
    <LocaleSelect defaultValue={locale}>
        {locales.map((locale) => (
            <SelectItem key={locale} value={locale} className='uppercase'>{locale}</SelectItem>
        ))}
    </LocaleSelect>
  )
}

export default LocaleSwitcher