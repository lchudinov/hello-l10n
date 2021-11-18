import { Component, Inject } from '@angular/core';
import { L10nLocale, L10nTranslationService, L10N_LOCALE } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-l10n';
  today = new Date();
  greeting?: string;
  whoIAm?: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService
  ) {
    this.translation.onChange().subscribe(
      _locale => {
        console.log(`locale changed to`, JSON.stringify(locale));
        this.greeting = this.translation.translate('greeting');
        this.whoIAm = this.translation.translate('whoIAm', { name: 'Angular l10n' });
      }
    )
  }
};
