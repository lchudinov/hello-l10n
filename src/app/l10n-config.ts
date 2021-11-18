import { L10nConfig } from "angular-l10n";

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  fallback: false,
  providers: [
    { name: 'app', asset: './assets/i18n/app', options: { version: '1.0.0' } },
  ],
  cache: false,
  keySeparator: '.',
  defaultLocale: { language: 'ru-RU' },
  schema: [
    { locale: { language: 'ru-RU' } }
  ],
};


