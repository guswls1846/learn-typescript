export interface CovidSummaryResponse {
  Global: Global;
  Countries: any[];
  Date: Date;
  Message: string;
}

export interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
}
