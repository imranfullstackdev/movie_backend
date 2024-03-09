/* eslint-disable import/no-mutable-exports */

import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String
    },
    firstName: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
    role:{
      type:String,
      default:"viewer"
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
