import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envValidationSchema } from './common/config/joi.validation';
import { DatabaseConfigService } from './common/config/database-config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlingInterceptor } from './common/interceptors/error-handling.interceptor';
import { PlayersModule } from './players/players.module';
import { AdminsModule } from './admins/admins.module';
import { TournamentModule } from './tournament/tournament.module';
import { ResultsModule } from './results/results.module';
import { SeederModule } from './common/seed/seeder.module';
import { CompetitionsModule } from './competitions/competitions.module';

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
      PlayersModule,
      TournamentModule,
      ResultsModule,
      AdminsModule,
      SeederModule,
      CompetitionsModule, 
    ],
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: ErrorHandlingInterceptor
        }
      ]
})
export class AppModule {}
