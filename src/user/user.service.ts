import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {UpdateUserInput} from "./update-user.input";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
    ) {}

    create(createUserInput: CreateUserInput) {
        const user = new this.userModel(createUserInput);
        return user.save();
    }

    findAll() {
        return this.userModel.find().exec();
    }

    async findOne(id: string) {
        const user = await this.userModel.findOne({ _id: id }).exec();
        if (!user) {
            throw new NotFoundException(`User ${id} not found`);
        }
        return user;
    }

    async update(id: string, updateUserInput: UpdateUserInput) {
        const existingUser = await this.userModel
            .findOneAndUpdate({ _id: id }, { $set: updateUserInput }, { new: true })
            .exec();

        if (!existingUser) {
            throw new NotFoundException(`User ${id} not found`);
        }
        return existingUser;
    }

    async remove(id: string) {
        const user = await this.findOne(id);
        return user.remove();
    }
}