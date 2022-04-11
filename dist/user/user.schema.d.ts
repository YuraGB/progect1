import { Schema as MongooseSchema, Document } from 'mongoose';
export declare class User extends Document {
    _id: MongooseSchema.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
}
export declare const UserSchema: MongooseSchema<User>;
