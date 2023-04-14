import { weaponDataInterface } from "./weaponDataInterface";
import { itemDataInterface } from "./itemsDataInterface";

export interface templateInterface {
  template: {
    profile: profileInterface;
    attributes: attributesInterface[];
    languages: languagesInterface[];
  }
  weaponData: weaponDataInterface[];
  items: itemDataInterface[];
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
  experience: number;
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
  mod: number;
}

export interface skillInterface {
  skill: string;
  proficiency: null | boolean;
}

export interface languagesInterface {
  ancestralgroup: string;
  id: string;
  variants: languageInterface[];
}

export interface languageInterface {
  language: string;
  id: string;
  written?: boolean;
  spoken?: boolean;
  inflection?: boolean;
  proficiency?: boolean;
  dialects?: dialectInterface[];
}

export interface dialectInterface {
  language: string;
  id: string;
  written: boolean;
  spoken: boolean;
  inflection: boolean;
  proficiency: boolean;
}
