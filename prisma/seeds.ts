import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()




async function main() {
    // await prisma.user.create({
    //     data: {
    //         email: 'sdkfkjsd@flkdsfjk.com',
    //         posts: {
    //             create: {
    //                 title: 'sdfsdfa',
    //                 content: 'safddsfa',
    //                 published: true,
    //             }
    //         }
    //     }

    // })

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
                                    written: null,
                                    spoken: null,
                                    inflection: null,
                                    proficiency: null,
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