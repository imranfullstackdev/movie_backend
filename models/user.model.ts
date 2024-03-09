/* eslint-disable import/no-mutable-exports */

import mongoose, { Model, Schema, Document } from 'mongoose';
import { Role } from '../model-constants';

export type UserDocument = Document & {
  email: string;
  firstName: string;
  password: string;
  role: Role;
};

const UserSchema = new Schema<UserDocument>(
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
    role: {
      type: String,
      default: Role.Manager
    }
  },
  { timestamps: true }
);

const User: Model<UserDocument> = mongoose.model<UserDocument>('User', UserSchema);

export default User;
