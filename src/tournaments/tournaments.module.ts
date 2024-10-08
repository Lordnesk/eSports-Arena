import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesModule } from 'src/roles/roles.module';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { Tournament } from './entitites/tournament.entity';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/services/users.service';
import { UsersModule } from 'src/users/users.module';


@Module({
    imports: [TypeOrmModule.forFeature([Tournament, User]), RolesModule, UsersModule],
    providers: [TournamentsService, RolesGuard, UserService],
    controllers: [TournamentsController],
    exports: [TournamentsService]
})
export class TournamentsModule {}
