import {Controller, Get, Query} from '@nestjs/common';
import {CryptoService} from "./crypto.service";

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {
  }

  @Get('airdrops')
  async getAirdrops(@Query('start') start: number,@Query('limit') limit: number,@Query('status') status: string) {
    return this.cryptoService.getAirdrops( {start,limit, status })
  }

  @Get('airdrop')
  async getAirdropById(@Query('id') id: string) {
    return this.cryptoService.getAirdropById( id)
  }
}
