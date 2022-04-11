import { CreateUserInput } from './user.input';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UpdateUserInput } from "./update-user.input";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: string): Promise<User>;
}
