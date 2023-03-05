import mongoose, { Schema } from 'mongoose';

import { LanguageModel } from './Language'
const modelName = 'Languages';

const schema = new Schema({
    ancestralgroup: {
        type: String,
        required: true,
    },
    varients: [
        LanguageModel
    ],
});



export const LanguagesModel =
    mongoose.models[modelName] || mongoose.model(modelName, schema, modelName);