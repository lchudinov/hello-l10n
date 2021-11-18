import { L10nLoader, L10nTranslationLoader, L10nTranslationService } from "angular-l10n";

export function l10nPreload(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
