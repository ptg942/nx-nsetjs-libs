import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import {DataAccessModule} from "@org/data-access";

@Module({
  imports: [DataAccessModule],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
