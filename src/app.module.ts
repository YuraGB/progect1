import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthController } from './auth/auth.controller';
import { DatabaseModule } from './database/database.module';
import { UserResolver } from './user/user.resolver';
import {UserModule} from "./user/user.module";
import {UserService} from "./user/user.service";
import {databaseProviders} from "./database/database.providers";
import {userProviders} from "./user/user.providers";
import { CommonModule } from './common/common.module';
import Schema from "./database/schema";

@Module({
  imports: [CommonModule, UserModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService
  ],
})
export class AppModule {}
