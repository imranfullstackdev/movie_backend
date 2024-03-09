/* eslint-disable import/no-mutable-exports */

import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema(
  {
    title: {
      type: String,
      require:"true"
    },
    genre: {
      type: String,
      require:"true"
    },
    rating: {
      type: Number,
      require:true
    },
   
  },
  { timestamps: true }
);

const movie = mongoose.model('movieDb', movieSchema);

export default movie;
