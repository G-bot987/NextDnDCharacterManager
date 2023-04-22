import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function createImperialTongues() {
    console.log('creating imperial tongues')
    await prisma.languages.create({
        data: {
            ancestralgroup: 'imperialtongues',
            variants: {
                create: [
                    {
                        language: 'High Imperial',
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: 'imperial dialects',
                        dialects:
                        {
                            create: [
                                {
                                    language: "Cala",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Ru",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Leish",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Riony",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Karsgerdi",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Rius",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Teas",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Chasie",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Quic",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Tilua",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Sola",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                            ]
                        }
                    },
                    {
                        language: "Cala",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Ru",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Leish",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Riony",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Karsgerdi",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Rius",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Teas",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Chasie",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Quic",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Tilua",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },
                    {
                        language: "Sola",
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,
                    },

                ]
            }
        }
    })

}

async function createTonguesOfOldMan() {
    console.log('creating Tongues Of OldMan')
    await prisma.languages.create({
        data: {
            ancestralgroup: 'tonguesofoldman',
            variants: {
                create: [
                    {
                        language: 'Hulecian',
                        dialects:
                        {
                            create: [
                                {
                                    language: "Old",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },

                            ]
                        }
                    },
                    {
                        language: 'Liundian',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },

                            ]
                        }
                    },

                    {
                        language: 'Heroneese',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Moni",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Pheroni",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Lae",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Carames",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Nepti",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Xousi",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Hasi",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Tri",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Ous",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Findi",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Hydran",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Reean",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Itees",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Annian",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Tirca",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Gari",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Antonese",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Swordkin",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Pirate",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                            ]
                        }
                    },
                    {
                        language: 'Deep valley',
                        dialects:
                        {
                            create: [
                                {
                                    language: "Ende",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Old",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },

                            ]
                        }
                    },

                ]
            }
        }
    })

}

async function createEndeTongues() {
    console.log('creating Tongues Of OldMan')
    await prisma.languages.create({
        data: {
            ancestralgroup: 'Ende Tongues',
            variants: {
                create: [
                    {
                        language: 'Haulende',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },

                            ]
                        }
                    },
                    {
                        language: 'Astralende',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Nys",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },


                            ]
                        }
                    },



                ]
            }
        }
    })

}

async function createMontainKinTongues() {
    console.log('creating Montain Kin Tongues')
    await prisma.languages.create({
        data: {
            ancestralgroup: 'Mountain kin Tongues',
            variants: {
                create: [
                    {
                        language: 'Clans of Fulgrix',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Singing Valley",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },

                            ]
                        }
                    },
                    {
                        language: 'Sons of Aiger',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                            ]
                        }
                    },



                ]
            }
        }
    })

}

async function createArcaneTongues() {
    console.log('creating Arcane Tongues')
    await prisma.languages.create({
        data: {
            ancestralgroup: 'Arcane Tongues',
            variants: {
                create: [
                    {
                        language: 'Rocian',
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,

                    },
                    {
                        language: 'Gnomish',
                        written: false,
                        spoken: false,
                        inflection: false,
                        proficiency: false,

                    },
                ]
            }
        }
    })

}

async function createPyricTongues() {
    console.log('creating Pyric Tongues')
    await prisma.languages.create({
        data: {
            ancestralgroup: 'Pyric Tongues',
            variants: {

                create: [
                    {
                        language: 'Pyric',
                        dialects:
                        {
                            create: [
                                {
                                    language: "High",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },
                                {
                                    language: "Low",
                                    written: false,
                                    spoken: false,
                                    inflection: false,
                                    proficiency: false,
                                },

                            ]
                        }
                    },
                ]
            }
        }
    })

}



function createLanguages() {
    console.log('creating Imperial Tongues')
    createImperialTongues()
    console.log('Imperial Tongues created')
    createTonguesOfOldMan()
    console.log('Tongues of Old Man created')
    createEndeTongues()
    console.log('Ende Tongues Created')
    createMontainKinTongues()
    console.log('Montain Kin Tongues Created')
    createArcaneTongues()
    console.log('Arcane Tongues Created')
    createPyricTongues()
    console.log('Pyric Tongues Created')

}

function createClothes() {

}

function createConsumables() {

}

function createItems() {
    console.log('creating clothes')
    createClothes()
    console.log('clothes created')
    console.log('creating food')
    createConsumables()
    console.log('food created')
}

async function createMortalRaces() {
    await prisma.races.create({
        data: {
            race: "Mortal",
            racialBonus: "A racial bonus",
            subRaces: {
                create: [
                    {
                        subRacialBonus: "A sub race bonus",
                        subRacialProficiencies: "Sub race proficiencies",
                        variants: "Imperial Human",
                        heritages: {
                            create: [
                                {
                                    bonus: 'bonus',
                                    proficiencies: 'pros',
                                    denomination: 'Royalian'
                                }

                            ]
                        }
                    }
                ]
            },
            speed: 30,
            size: "Medium"
        }
    })

}


async function createRaces() {
    console.log('creating races')
    console.log('creating Moral Races')
    createMortalRaces()
    console.log('Mortal Races Create')


    // await prisma.races.createMany({
    //     data: [
    //         { race: 'Moral' },
    //         { race: 'Ende' },
    //         { race: 'MountainKin' },
    //         { race: 'Gnomish' },

    //     ],
    // })

}


async function main() {
    console.log('seeding database')
    console.log('creating languages')
    createLanguages()
    console.log('languages seeded ...')
    console.log('seeding Items')
    createItems()
    console.log('items created')
    console.log('creating races')
    createRaces()
    console.log('races created')

    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })