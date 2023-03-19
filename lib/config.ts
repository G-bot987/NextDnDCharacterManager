require('dotenv').config();

export const config: {
  DB?: string;
  COLLECTION?: string;
} = {
  DB: process.env.DB,
  COLLECTION: process.env.COLLECTION,
};