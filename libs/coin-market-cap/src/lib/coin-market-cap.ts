import axios from "axios";

const BASE_URL = 'https://sandbox-api.coinmarketcap.com';
const KEY = 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c';
export interface GetAirdropsResponse {
  id: string;
  name: string;
  totalPrize: number;
  startDate: Date;
}
export class CoinMarketCapService {

  async getAirdrops(params?: {start?: number,limit?: number, status?:string }):Promise<Array<GetAirdropsResponse>> {
    try {
      const headerConfig = {
        'X-CMC_PRO_API_KEY': KEY,
        'Accept': '*/*',
      }
      const response = await axios.get(`${BASE_URL}/v1/cryptocurrency/airdrops`, {
        headers: {...headerConfig},
        params
      });

      return response.data?.data?.data?.map((data: any)=>(
        {
        id: data?.id,
        name: data?.project_name,
        totalPrize: data?.total_prize,
        startDate: new Date(data?.start_date),
      }));
    } catch (error) {
      console.error('Error fetching data from CoinMarketCapService getAirdrops:', error);
      return [];
    }
  }

  async getAirdropById(id: string):Promise<GetAirdropsResponse | null> {
    try {
      const headerConfig = {
        'X-CMC_PRO_API_KEY': KEY,
        'Accept': '*/*',
      }
      const response = await axios.get(`${BASE_URL}/v1/cryptocurrency/airdrop`, {
        headers: {...headerConfig},
        params: { id }
      });
      const data = response.data?.data;
      return {
        id: data?.id,
        name: data?.project_name,
        totalPrize: data?.total_prize,
        startDate: new Date(data?.start_date),
      }

    } catch (error) {
      console.error('Error fetching data from CoinMarketCapService getAirdrops:', error);
      return null;
    }
  }
}
