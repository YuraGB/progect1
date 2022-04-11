import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: async () => ({
                uri: 'mongodb+srv://yuhur:99999Qz@cluster0.h2sca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
            }),
        }),
    ],
})
export class MongoModule {}