import { Injectable } from "@angular/core";
import { L10nUserLanguage } from "angular-l10n";

@Injectable()
export class UserLanguage implements L10nUserLanguage {
  get(): Promise<string | null> {
    console.log(`angular l10n requested User language`);
    return Promise.resolve('ru-RU');
  }
}

