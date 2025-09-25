import { Injectable } from '@nestjs/common';
import {CoinMarketCapService, GetAirdropsResponse} from "@org/coin-market-cap";

interface CryptoServiceGetAirdropsResponse {
  airdrops: Array<GetAirdropsResponse>
}

interface CryptoServiceGetAirdropByIdResponse {
  airdrop: GetAirdropsResponse
}
@Injectable()
export class CryptoService {
  private cryptoService: CoinMarketCapService;

  constructor() {
    this.cryptoService = new CoinMarketCapService();
  }

  async getAirdrops(params?: {start?: number,limit?: number, status?:string }): Promise<CryptoServiceGetAirdropsResponse> {
    const date = []
    const result = await this.cryptoService.getAirdrops(params);

    if (result) date.push(...result)
    return { airdrops:date };
  }

  async getAirdropById(id: string): Promise<CryptoServiceGetAirdropByIdResponse> {
    let date = null
    const result = await this.cryptoService.getAirdropById(id);

    if (result) date = result
    return { airdrop:date };
  }
}
