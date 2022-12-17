export interface WrittenInterace {
  written: boolean | null | undefined;
  language: string;
  dialect?: string;
}

export interface SpokenInterace {
  spoken: boolean | null | undefined;
  language: string;
  dialect?: string;
}

export interface InflectionInterace {
  inflection: boolean | null | undefined;
  language: string;
  dialect?: string;
}

export interface ProficiencyInterace {
  proficiency: boolean | null | undefined;
  language: string;
  dialect?: string;
}

export interface LanguagePropertiesRenderInterface {
  property: string;
  selected: boolean;
}
