import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );
  const port = process.env.Port || 3000;

//  app.useStaticAssets(resolve('../p2f/my-app/build'));
  await app.listen(port);
}
bootstrap();
