
import { Injectable } from '@angular/core';
import { L10nLocale, L10nStorage } from 'angular-l10n';

@Injectable()
export class L10nStorageService implements L10nStorage {
  static key: string = 'language';
  constructor() { }

  public async read(): Promise<L10nLocale | null> {
    const language = window.localStorage.getItem(L10nStorageService.key);
    console.log(`storage locale read`, language);
    return Promise.resolve(language ? JSON.parse(language) : null);
  }

  public async write(locale: L10nLocale): Promise<void> {
    console.log(`storage locale write`, locale.language);
    window.localStorage.setItem(L10nStorageService.key, JSON.stringify(locale));
    return Promise.resolve();
  }

}

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
