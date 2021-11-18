import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { L10nIntlModule, L10nLoader, L10nTranslationLoader, L10nTranslationModule, L10nTranslationService } from 'angular-l10n';

import { AppComponent } from './app.component';
import { l10nConfig } from './l10n-config';
import { HttpTranslationLoader } from './translation-loader';
import { UserLanguage } from './l10-user-language';
import { L10nStorageService } from './l10n-storage';
import { l10nPreload } from './preload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    L10nTranslationModule.forRoot(
      l10nConfig,
      {
        translationLoader: HttpTranslationLoader,
        userLanguage: UserLanguage,
        storage: L10nStorageService,
      }
    ),
    L10nIntlModule,
  ],
  providers: [
    UserLanguage,
    {
      provide: APP_INITIALIZER,
      useFactory: l10nPreload,
      deps: [L10nLoader],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
