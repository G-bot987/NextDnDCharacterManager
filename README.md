# This Project is currently in development 



## Update April 2023

Progess is on schedule and proceeding well, despite some personal difficulties. Mongoose was Removed in Favour of Prisma, due to performance intergration and ease of use. Mongo Intergration is progressing well with Prisma and data can now be seeded. Mock data is in the progress of being migrated Mongo, A seeds file has been implemented to allow for local use. Data can be successfully retrieved from mongo and displayed using the getServerSideProps method. soon the Mongo, Prisma, retrieve server side props pattern will be established across the application for all character card data. 

## Update March 2023
Skills section is complete, users can select level or input experience points manually to give character lv, users can select attribute points. When A user selects a skill it is then rendered in a skill proficiency comp. The rendering of skills bonus will dynamically update when attribute scores and character level are selected. 

styling and UI tuning is required. 

currently working on Mongo DB, sedding data. For both weapons and items components. Currently on course for July completion! :) 


## December 2022
Currently front end elements and logic are being implemented, development currently focus on character creation in the card section of the app. The language section of the card is working as intended allowing the selection and deletion of language proficiences & rendering a selected language proficiences component. Language proficiencies can also be deleted from the selected Language Proficiences comp. 

specifically the attributes section is being developed as of December 2022 this is expected to be completed by Febuary 1st 2023, currently users can select skills. Next steps include: styling this section, a selected skills com, attribute score display. 

# Deployment 

This app is deployed with Vercel, at:  [deployed](https://next-dn-d-character-manager.vercel.app/ "https://next-dn-d-character-manager.vercel.app/") 

## Demo

Functionality as of December 2022
[Demo](https://drive.google.com/file/d/1M_O8B_hebL1oOkDhuVBTKaInPSSiP_PH/view "https://drive.google.com/file/d/1M_O8B_hebL1oOkDhuVBTKaInPSSiP_PH/view")

# About 

A app which has has the aspirational goal of allowing character creation for Dungeons & Dragons 5e. Through my experience of running games on digital tabletops I found the current market options for hosting limited and restrained. This platform is tailored for creation of characters in my homebrew world. Giving a detailed and bespoke language selection component as well as custom skills. This app will eventually allow players to log in and save characters to there profiles as well as providing a space for players to communicate through posts, provide notications with regards to player games and store journal notes. Yes this is to say I will eventually host my Dungeons and Dragons games on this platform! 

# Technologies 

- TypeScript
- Next
- Prisma
- MongoDB
- Redux
- Tailwind

# etiquette 

Please don't fork without requesting

## Running locally

## Mongo Locally

See example.env, you will need to set up a connection to a mongoDB for local use, see https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/ . you will need to provide your username, password and dbname in the MONGODB_URI as per these instructions. alternately watch https://www.youtube.com/watch?v=aAupumVpqcE&t=2388s. Do not attempt to commit your env or ammend any process.env variables. Vercel build bot will, block your merge if do. Do not commit loose credentials. In a local instance you will need a MongoAtlas acc. The deployed instance is connected too a production MongoDB. 

- npm i
- update env variables to your local mongodb instance, you will need to follow https://www.mongodb.com/try/download/community to get a mongo locally
- run seeds 'npx prisma db seed', you will need the prisma CLI, https://www.prisma.io/docs/concepts/components/prisma-cli/installation, I had issues with getting the seeds to work so needed to run 'npm i -D tsx' I think. 
- npm run dev

## Merge protocol

- ask to colaborat 
- pull latest version
- branch from main 
- test build with npm run build
- push branch
- branch must pass vercel bot build validation 
- request review
- merge 
- check deployment

# Production timeline 

##  MileStone 0.1.0, expected completion July 2023 

Working character card, with all the generic Dungeons and Dragons requirements including; weapons, skills, inventory. This is the currently active Milestone !

- [x] Languages  
- [x] Attributes/skills 
- [ ] Basic Character info race class etc
- [ ] inventory
- [ ] Weapons
- [ ] Notes


##  Log In functionality 0.2.0 expected completion September 2023 

Intergrate login functionality with MongoDB to allow users to save there characters for future use

- [x] establish API's
- [x] Prisma intergration models etc.
- [ ] authenticate users
- [ ] verify emails
- [ ] security 
        
##  Intergrated MongoDb 0.3.0 expected completion December 2023 

allow users to save characters to their profiles. 
*** A connection to a MongoDB database has been provisionally set up to ensure core functionality and intergration is possible

- [x] Backend setup
- [x] Api's 

## Implement unit testing 

to protect funcionality and ensure intergitry of future versions

- [ ] TDD using Jest

# Local use 

Local build: 'npm run dev'
Testing: 'npm run build'

# branch protect 

Main is protected all vercel build checks must pass before commits are made

# colaboration 

If you wish to get involved please message me on Linkedin you will find a link to this on my profile home page and my professional portfolio

# My Github Profile 

[MyGit](https://github.com/G-bot987 "https://github.com/G-bot987")

[My LinkedIn](https://www.linkedin.com/in/georgia-h-b48434150/ "https://www.linkedin.com/in/georgia-h-b48434150/")