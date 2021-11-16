import { Injectable, Optional } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { L10nTranslationLoader, L10nProvider, L10nConfig } from "angular-l10n";
import { Observable } from "rxjs";

@Injectable()
export class HttpTranslationLoader implements L10nTranslationLoader {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
    const url = `${provider.asset}-${language}.json`;
    const options = {
      headers: this.headers,
    };
    return this.http.get(url, options);
  }

}

