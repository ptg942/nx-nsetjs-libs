import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CatsService} from "./cats.service";
import { AuthGuard } from '@nestjs/passport';

class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('cats')
@UseGuards(AuthGuard('jwt'))
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }
}
