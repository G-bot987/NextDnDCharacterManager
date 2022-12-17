export interface LanguagePropertyInterace {
  written?: boolean | null | undefined;
  spoken?: boolean | null | undefined;
  inflection?: boolean | null | undefined;
  proficiency?: boolean | null | undefined;
  language: string;
  dialectLanguage?: string;
}

export interface LanguagePropertiesRenderInterface {
  property: string;
  selected: boolean;
}
