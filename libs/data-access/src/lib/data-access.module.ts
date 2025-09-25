import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  controllers: [],
  providers: [],
  imports: [
    // Регистрируем все наши схемы здесь
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  // Экспортируем MongooseModule, чтобы его можно было использовать в других модулях
  exports: [MongooseModule],
})
export class DataAccessModule {}
