import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonController } from './common/common.controller';
import { ConfigController } from './common/config/config.controller';
import { ServicesController } from './services/services.controller';
import { ServicesModule } from './services/services.module';
import { ConfigModule } from './common/config/config.module';
import { CommonModule } from './common/common.module';
import { AdminModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TournamentController } from './tournament/tournament.controller';
import { TournamentsController } from './tournaments/tournaments.controller';
import { TournamentsService } from './tournaments/tournaments.service';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [ServicesModule, ConfigModule, CommonModule, AdminModule, RolesModule, TournamentsModule],
  controllers: [AppController, CommonController, ConfigController, ServicesController, TournamentController, TournamentsController],
  providers: [AppService, TournamentsService],
})
export class AppModule {}
