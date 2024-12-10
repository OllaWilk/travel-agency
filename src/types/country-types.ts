export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface CountryType {
  currencies?: Currency[];
  languages: Language[];
  flag: string;
  name: string;
  alpha2Code?: string;
  alpha3Code?: string;
  capital: string;
  region: string;
  subregion: string;
  population?: number;
  timezones?: string[];
  borders?: string[];
}

export type Countries = CountryType[];

export type CountriesRecord = Record<string, CountryType>;
