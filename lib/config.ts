require('dotenv').config();

export const config: {
  DB?: string;
  ITEMS_COLLECTION?: string;
} = {
  DB: process.env.DB,
  ITEMS_COLLECTION: process.env.ITEMS_COLLECTION,
};