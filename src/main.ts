import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import RoleSeed from './database/seed/role.seed';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 /* const dataSource = app.get(DataSource)

  const roleSeed = new RoleSeed();

  const configService = app.get(ConfigService); 


  const executeSeedString = configService.get<string>('EXECUTE_SEEDS');

  const executeSeed = JSON.parse(executeSeedString);


  if (executeSeed === true) {
    await roleSeed.run(dataSource);
  }*/
  await app.listen(3000);
  console.log("Application is listening on port 3000");
}

bootstrap();
