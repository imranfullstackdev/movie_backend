import { Document, Model, model, Schema } from 'mongoose';

interface IMovie extends Document {
  title: string;
  genre: string;
  rating: number;
}

const movieSchema: Schema = new Schema<IMovie>(
  {
    title: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Movie: Model<IMovie> = model<IMovie>('movieDb', movieSchema);

export default Movie;
