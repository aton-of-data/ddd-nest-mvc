import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'app', 'view'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'src', 'app', 'view', 'layouts'));

  await app.listen(3000);
}
bootstrap();
