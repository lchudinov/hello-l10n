import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { L10nIntlModule, L10nTranslationModule } from 'angular-l10n';

import { AppComponent } from './app.component';
import { l10nConfig } from './l10n-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    L10nTranslationModule.forRoot(l10nConfig),
    L10nIntlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
