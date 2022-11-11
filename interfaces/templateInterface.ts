export interface templateInterface {
  profile?: profileInterface;
  attributes?: attributesInterface[];
  languages?: languagesInterface;
}

export interface profileInterface {
  charName: string;
  classes?: classesInterface[];
  lv?: lvInterface[];
  xp: number;
  race: raceInterface[];
  background: string;
  strength: string;
  weakness: string;
  image?: imageInterface;
}

export interface classesInterface {
  name: string;
  marker: number;
}
export interface lvInterface {
  value: number;
  selected: null | boolean;
}

export interface raceInterface {
  name: string;
  marker: number;
}

export interface imageInterface {
  avatar: string;
  alt: string;
}

export interface attributesInterface {
  attname: string;
  abr: string;
  score: scoreInterface[];
  skills: skillsInterface[];
}

export interface scoreInterface {
  value: number;
  selected: null | boolean;
}

export interface skillsInterface {
  name: string;
  proficiency: null | boolean;
}

export interface languagesInterface {
  imperialtongues: languageInterface[];
  tonguesofoldman: languageInterface[];
  endetongues: languageInterface[];
  mountainkintongues: languageInterface[];
  arcanetongues: languageInterface[];
  pyrictongues: languageInterface[];
}

export interface languageInterface {
  language: string | boolean;
  written?: null | boolean;
  spoken?: null | boolean;
  inflection?: string;
  proficiency?: null | boolean;
  dialect?: dialectInterface[];
}

export interface dialectInterface {
  name: string;
  written: null | boolean;
  spoken: null | boolean;
  inflection: string;
  proficiency: null | boolean;
}
