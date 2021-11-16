import { L10nConfig } from "angular-l10n";

const i18nAsset = {
  'en-US': {
    greeting: 'Hello world!',
    whoIAm: 'I am {{name}}',
    devs: {
      one: 'software developer',
      other: 'software developers'
    }
  },
  'it-IT': {
    greeting: 'Ciao mondo!',
    whoIAm: 'Sono {{name}}',
    devs: {
      one: 'sviluppatori software',
      other: "sviluppatori software"
    }
  },
  'ru-RU': {
    greeting: 'Привет мир!',
    whoIAm: 'Я {{name}}',
    devs: {
      one: 'первый разработчик',
      other: "другие"
    }
  }
};

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [
    { name: 'app', asset: i18nAsset }
  ],
  cache: true,
  keySeparator: '.',
  defaultLocale: { language: 'ru-RU', currency: 'RUB', timeZone: 'Asia/Yekaterinburg' },
  schema: [
    { locale: { language: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' }, dir: 'ltr', text: 'United States' },
    { locale: { language: 'it-IT', currency: 'EUR', timeZone: 'Europe/Rome' }, dir: 'ltr', text: 'Italia' },
    { locale: { language: 'ru-RU', currency: 'RUB', timeZone: 'Asia/Yekaterinburg' }, dir: 'ltr', text: 'Russia' }
  ],
};


