import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonController } from './common/common.controller';
import { ConfigController } from './config/config.controller';
import { ServicesController } from './services/services.controller';
import { ServicesModule } from './services/services.module';
import { ConfigModule } from './config/config.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ServicesModule, ConfigModule, CommonModule],
  controllers: [AppController, CommonController, ConfigController, ServicesController],
  providers: [AppService],
})
export class AppModule {}
