// import img from "../images/nimrodel.png";

const template = {
  profile: {
    charName: "Your Characters Name",
    classes: [
      { name: "class 1", marker: 1 },
      { name: "class 2", marker: 2 },
    ],
    lv: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    xp: 0,
    race: [
      { name: "race 1", marker: 1 },
      { name: "race 2", marker: 2 },
      { name: "race 3", marker: 3 },
    ],
    background: "Your Background",
    strength: "Your Strengths",
    weakness: "Your Weaknesses",
    image: { avatar: "a image", alt: "your characters image" },
  },
  Attributes: [
    {
      attname: "Strength",
      abr: "Str",
      score: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      skills: [{ name: "athletics", proficiency: null }],
    },
    {
      attname: "Dexterity",
      abr: "Dex",
      score: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      skills: [
        { name: "acrobatics", proficiency: null },
        { name: "sleight of hand", proficiency: null },
        { name: "stealth", proficiency: null },
      ],
    },
    { attname: "Constitution", abr: "Con", score: 8, skills: [] },
    {
      attname: "Charisma",
      abr: "Cha",
      score: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      skills: [
        { name: "deception", proficiency: null },
        { name: "intimatation", proficiency: null },
        { name: "performance", proficiency: null },
        { name: "persuasion", proficiency: null },
      ],
    },
    {
      attname: "Inteligence",
      abr: "Int",
      score: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      skills: [
        { name: "arcana", proficiency: null },
        { name: "dark arcana", proficiency: null },
        { name: "forbidden history", proficiency: null },
        { name: "history", proficiency: null },
        { name: "investigation", proficiency: null },
        { name: "lore", proficiency: null },
        { name: "nature", proficiency: null },
        { name: "religion", proficiency: null },
        { name: "traditions", proficiency: null },
      ],
    },
    {
      attname: "Wisdom",
      abr: "Wis",
      score: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      skills: [
        { name: "animal handling", proficiency: null },
        { name: "insight", proficiency: null },
        { name: "medicine", proficiency: null },
        { name: "perception", proficiency: null },
        { name: "survival", proficiency: null },
      ],
    },
  ],
  languages: {
    imperialtongues: [
      {
        language: "high imperial",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "imperial dialect",

        dialect: [
          {
            name: "Cala",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Ru",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Leish",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Riony",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Karsgerdi",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Rius",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Teas",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Chasie",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Quic",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Tilua",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Sola",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
      {
        language: "Cala",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Ru",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Leish",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Riony",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Karsgerdi",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Rius",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Teas",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Chasie",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Quic",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Tilua",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Sola",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
    ],

    tonguesofoldman: [
      {
        language: "Hulecian",

        dialect: [
          {
            name: "old",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },

      {
        language: "Liundian",

        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },

      {
        language: "Heroneese",

        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Moni",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "pheroni",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "lae",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "carames",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Nepti",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "xousi",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "hasi",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "tri",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "ous",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "findi",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "hydran",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Reean",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "itees",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Annian",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "tirca",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "Gari",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "antonese",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "swordkin",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "pirate",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },

      {
        language: "Deep valley",

        dialect: [
          {
            name: "ende",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "old",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
    ],

    endetongues: [
      {
        language: "Haulende",

        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
      {
        language: "Astralende",
        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "nys",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
    ],

    mountainkintongues: [
      {
        language: "Clans of Fulgrix",

        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "singingvalley",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
      {
        language: "Sons of Aiger",
        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
    ],

    arcanetongues: [
      {
        language: "Rocian",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Gnomish",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
    ],

    pyrictongues: [
      {
        language: "pyric",

        dialect: [
          {
            name: "high",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
          {
            name: "low",
            written: null,
            spoken: null,
            inflection: "",
            proficiency: null,
          },
        ],
      },
    ],
  },
};

export default template;
