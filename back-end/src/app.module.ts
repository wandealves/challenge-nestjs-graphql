import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormOptions from './config/orm';

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
