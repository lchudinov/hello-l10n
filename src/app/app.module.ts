import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { L10nIntlModule, L10nTranslationModule } from 'angular-l10n';

import { AppComponent } from './app.component';
import { l10nConfig } from './l10n-config';
import { HttpTranslationLoader } from './translation-loader';

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
        translationLoader: HttpTranslationLoader
      }
    ),
    L10nIntlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
