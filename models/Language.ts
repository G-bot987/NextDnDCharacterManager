import mongoose, { Schema } from 'mongoose';

const modelName = 'Language';

const schema = new Schema({
    name: String,
    properties: [String],
});



export const LanguageModel =
    mongoose.models[modelName] || mongoose.model(modelName, schema, modelName);