import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User extends Document {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;
    @Prop()
    @Field(() => String, { description: 'User firstName ' })
    firstName: string;
    @Prop()
    @Field(() => String, { description: 'User lastName ' })
    lastName: string;
    @Prop()
    @Field(() => String, { description: 'User email ' })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);