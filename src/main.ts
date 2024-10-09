import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CountrySeeder } from './common/seed/country.seeder';
import { TeamSeeder } from './common/seed/team.seeder';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // seeders configuration
    const countrySeeder = app.get(CountrySeeder);
    await countrySeeder.seed();

    const teamSeeder = app.get(TeamSeeder);
    await teamSeeder.seed();

    // Swagger configuration
    const config = new DocumentBuilder()
        .setTitle('eSports Arena')
        .setDescription(
            'API documentation managment of tournaments',
        )
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log("Application is listening on port 3000");
}

bootstrap();
