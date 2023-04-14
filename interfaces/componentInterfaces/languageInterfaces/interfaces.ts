export interface LanguagePropertyInterace {
  written?: boolean;
  spoken?: boolean;
  inflection?: boolean;
  proficiency?: boolean;
  language: string;
  dialectLanguage?: string;
}

export interface LanguagePropertiesRenderInterface {
  property: string;
  selected: boolean;
}
