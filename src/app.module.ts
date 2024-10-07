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

@Module({
  imports: [ServicesModule, ConfigModule, CommonModule, AdminModule, RolesModule],
  controllers: [AppController, CommonController, ConfigController, ServicesController],
  providers: [AppService],
})
export class AppModule {}
