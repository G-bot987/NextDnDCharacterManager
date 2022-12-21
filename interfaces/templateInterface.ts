export interface templateInterface {
  profile: profileInterface;
  attributes: attributesInterface[];
  languages: languagesInterface[];
}

export interface profileInterface {
  name: string;
  classes: classesInterface[];
  lv: lvInterface[];
  xp: number;
  races: raceInterface[];
  background: string;
  strength: string;
  weakness: string;
  image?: imageInterface;
}

export interface classesInterface {
  class: string;
  marker: number;
}
export interface lvInterface {
  value: number;
  selected: null | boolean;
  proBonus: number;
}

export interface raceInterface {
  race: string;
  marker: number;
}

export interface imageInterface {
  avatar: string;
  alt: string;
}

export interface attributesInterface {
  attribute: string;
  abr: string;
  score: scoreInterface[];
  skills?: skillInterface[];
}

export interface scoreInterface {
  value: number;
  selected: null | boolean;
}

export interface skillInterface {
  skill: string;
  proficiency: null | boolean;
}

export interface languagesInterface {
  ancestralgroup: string;
  varients: languageInterface[];
}

export interface languageInterface {
  language: string;
  written?: null | boolean;
  spoken?: null | boolean;
  inflection?: null | boolean;
  proficiency?: null | boolean;
  dialects?: dialectInterface[];
}

export interface dialectInterface {
  language: string;
  written: null | boolean;
  spoken: null | boolean;
  inflection: null | boolean;
  proficiency: null | boolean;
}
