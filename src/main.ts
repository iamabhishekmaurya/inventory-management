import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { FileLogger } from './common/logger/fileLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule/* ,{
    logger: new FileLogger("AppLogger"),
  } */);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
