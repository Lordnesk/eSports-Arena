import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { envValidationSchema } from './common/config/joi.validation';
import { DatabaseConfigService } from './common/config/database-config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlingInterceptor } from './common/interceptors/error-handling.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envValidationSchema,
      envFilePath: '.env',
      isGlobal: true,
      }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useClass: DatabaseConfigService,
      }),
      CommonModule, 
      AdminModule, 
      RolesModule, 
      TournamentsModule],
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: ErrorHandlingInterceptor
        }
      ]
})
export class AppModule {}
