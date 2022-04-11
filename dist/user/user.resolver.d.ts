import { CreateUserInput } from './user.input';
import { UserService } from './user.service';
import { User } from './user.schema';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    createUser(input: CreateUserInput): Promise<User>;
    users(): Promise<User[]>;
}
