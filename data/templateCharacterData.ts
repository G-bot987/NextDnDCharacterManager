// import img from "../images/nimrodel.png";

const template = {
  profile: {
    charName: "Name",
    classes: [
      { class: "class 1", marker: 1 },
      { class: "class 2", marker: 2 },
    ],
    lv: [
      { value: 1, selected: null },
      { value: 2, selected: null },
      { value: 3, selected: null },
      { value: 4, selected: null },
      { value: 5, selected: null },
      { value: 6, selected: null },
      { value: 7, selected: null },
      { value: 8, selected: null },
      { value: 9, selected: null },
      { value: 10, selected: null },
      { value: 11, selected: null },
      { value: 12, selected: null },
      { value: 13, selected: null },
      { value: 14, selected: null },
      { value: 15, selected: null },
      { value: 16, selected: null },
      { value: 17, selected: null },
      { value: 18, selected: null },
      { value: 19, selected: null },
      { value: 20, selected: null },
    ],
    xp: 0,
    races: [
      { race: "race 1", marker: 1 },
      { race: "race 2", marker: 2 },
      { race: "race 3", marker: 3 },
    ],
    background: "Background",
    strength: "Strengths",
    weakness: "Weaknesses",
    image: { avatar: "a image", alt: "your characters image" },
  },
  attributes: [
    {
      attribute: "Strength",
      abr: "Str",
      score: [
        { value: 1, selected: null },
        { value: 2, selected: null },
        { value: 3, selected: null },
        { value: 4, selected: null },
        { value: 5, selected: null },
        { value: 6, selected: null },
        { value: 7, selected: null },
        { value: 8, selected: null },
        { value: 9, selected: null },
        { value: 10, selected: null },
        { value: 11, selected: null },
        { value: 12, selected: null },
        { value: 13, selected: null },
        { value: 14, selected: null },
        { value: 15, selected: null },
        { value: 16, selected: null },
        { value: 17, selected: null },
        { value: 18, selected: null },
        { value: 19, selected: null },
        { value: 20, selected: null },
      ],
      skills: [{ skill: "athletics", proficiency: null }],
    },
    {
      attribute: "Dexterity",
      abr: "Dex",
      score: [
        { value: 1, selected: null },
        { value: 2, selected: null },
        { value: 3, selected: null },
        { value: 4, selected: null },
        { value: 5, selected: null },
        { value: 6, selected: null },
        { value: 7, selected: null },
        { value: 8, selected: null },
        { value: 9, selected: null },
        { value: 10, selected: null },
        { value: 11, selected: null },
        { value: 12, selected: null },
        { value: 13, selected: null },
        { value: 14, selected: null },
        { value: 15, selected: null },
        { value: 16, selected: null },
        { value: 17, selected: null },
        { value: 18, selected: null },
        { value: 19, selected: null },
        { value: 20, selected: null },
      ],
      skills: [
        { skill: "acrobatics", proficiency: null },
        { skill: "sleight of hand", proficiency: null },
        { skill: "stealth", proficiency: null },
      ],
    },
    {
      attribute: "Constitution",
      abr: "Con",
      score: [
        { value: 1, selected: null },
        { value: 2, selected: null },
        { value: 3, selected: null },
        { value: 4, selected: null },
        { value: 5, selected: null },
        { value: 6, selected: null },
        { value: 7, selected: null },
        { value: 8, selected: null },
        { value: 9, selected: null },
        { value: 10, selected: null },
        { value: 11, selected: null },
        { value: 12, selected: null },
        { value: 13, selected: null },
        { value: 14, selected: null },
        { value: 15, selected: null },
        { value: 16, selected: null },
        { value: 17, selected: null },
        { value: 18, selected: null },
        { value: 19, selected: null },
        { value: 20, selected: null },
      ],
    },
    {
      attribute: "Charisma",
      abr: "Cha",
      score: [
        { value: 1, selected: null },
        { value: 2, selected: null },
        { value: 3, selected: null },
        { value: 4, selected: null },
        { value: 5, selected: null },
        { value: 6, selected: null },
        { value: 7, selected: null },
        { value: 8, selected: null },
        { value: 9, selected: null },
        { value: 10, selected: null },
        { value: 11, selected: null },
        { value: 12, selected: null },
        { value: 13, selected: null },
        { value: 14, selected: null },
        { value: 15, selected: null },
        { value: 16, selected: null },
        { value: 17, selected: null },
        { value: 18, selected: null },
        { value: 19, selected: null },
        { value: 20, selected: null },
      ],
      skills: [
        { skill: "deception", proficiency: null },
        { skill: "intimatation", proficiency: null },
        { skill: "performance", proficiency: null },
        { skill: "persuasion", proficiency: null },
      ],
    },
    {
      attribute: "Inteligence",
      abr: "Int",
      score: [
        { value: 1, selected: null },
        { value: 2, selected: null },
        { value: 3, selected: null },
        { value: 4, selected: null },
        { value: 5, selected: null },
        { value: 6, selected: null },
        { value: 7, selected: null },
        { value: 8, selected: null },
        { value: 9, selected: null },
        { value: 10, selected: null },
        { value: 11, selected: null },
        { value: 12, selected: null },
        { value: 13, selected: null },
        { value: 14, selected: null },
        { value: 15, selected: null },
        { value: 16, selected: null },
        { value: 17, selected: null },
        { value: 18, selected: null },
        { value: 19, selected: null },
        { value: 20, selected: null },
      ],
      skills: [
        { skill: "arcana", proficiency: null },
        { skill: "dark arcana", proficiency: null },
        { skill: "forbidden history", proficiency: null },
        { skill: "history", proficiency: null },
        { skill: "investigation", proficiency: null },
        { skill: "lore", proficiency: null },
        { skill: "nature", proficiency: null },
        { skill: "religion", proficiency: null },
        { skill: "traditions", proficiency: null },
      ],
    },
    {
      attribute: "Wisdom",
      abr: "Wis",
      score: [
        { value: 1, selected: null },
        { value: 2, selected: null },
        { value: 3, selected: null },
        { value: 4, selected: null },
        { value: 5, selected: null },
        { value: 6, selected: null },
        { value: 7, selected: null },
        { value: 8, selected: null },
        { value: 9, selected: null },
        { value: 10, selected: null },
        { value: 11, selected: null },
        { value: 12, selected: null },
        { value: 13, selected: null },
        { value: 14, selected: null },
        { value: 15, selected: null },
        { value: 16, selected: null },
        { value: 17, selected: null },
        { value: 18, selected: null },
        { value: 19, selected: null },
        { value: 20, selected: null },
      ],
      skills: [
        { skill: "animal handling", proficiency: null },
        { skill: "insight", proficiency: null },
        { skill: "medicine", proficiency: null },
        { skill: "perception", proficiency: null },
        { skill: "survival", proficiency: null },
      ],
    },
  ],
  languages: [
    {
      ancestralgroup: "imperialtongues",
      varients: [
        {
          language: "high imperial",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "imperial dialects",

          dialects: [
            {
              language: "Cala",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Ru",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Leish",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Riony",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Karsgerdi",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Rius",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Teas",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Chasie",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Quic",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Tilua",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Sola",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
        {
          language: "Cala",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Ru",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Leish",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Riony",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Karsgerdi",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Rius",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Teas",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Chasie",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Quic",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Tilua",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Sola",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
      ],
    },
    {
      ancestralgroup: "tonguesofoldman",
      varients: [
        {
          language: "Hulecian",

          dialects: [
            {
              language: "old",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },

        {
          language: "Liundian",

          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },

        {
          language: "Heroneese",

          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Moni",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "pheroni",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "lae",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "carames",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Nepti",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "xousi",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "hasi",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "tri",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "ous",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "findi",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "hydran",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Reean",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "itees",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Annian",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "tirca",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "Gari",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "antonese",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "swordkin",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "pirate",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },

        {
          language: "Deep valley",

          dialects: [
            {
              language: "ende",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "old",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
      ],
    },

    {
      ancestralgroup: "endetongues",
      varients: [
        {
          language: "Haulende",

          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
        {
          language: "Astralende",
          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "nys",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
      ],
    },

    {
      ancestralgroup: "mountainkintongues",
      varients: [
        {
          language: "Clans of Fulgrix",

          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "singingvalley",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
        {
          language: "Sons of Aiger",
          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
      ],
    },

    {
      ancestralgroup: "arcanetongues",
      varients: [
        {
          language: "Rocian",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
        {
          language: "Gnomish",
          written: null,
          spoken: null,
          inflection: null,
          proficiency: null,
        },
      ],
    },
    {
      ancestralgroup: "pyrictongues",
      varients: [
        {
          language: "pyric",

          dialects: [
            {
              language: "high",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
            {
              language: "low",
              written: null,
              spoken: null,
              inflection: null,
              proficiency: null,
            },
          ],
        },
      ],
    },
  ],
};

export default template;
