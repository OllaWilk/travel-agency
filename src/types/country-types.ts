export interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface Language {
  iso639_1?: string;
  iso639_2?: string;
  name: string;
  nativeName: string;
}

export interface CountrySummeryType {
  name: string;
  alpha3Code?: string;
  region: string;
  subregion: string;
  languages: Language[];
  capital: string;
}

export interface CountriesType extends CountrySummeryType {
  currencies?: Currency[];
  languages: Language[];
  alpha2Code?: string;
  population?: number;
  timezones?: string[];
  borders?: string[];
}

export type AllCountries = CountriesType[];

export type CountriesRecord = Record<string, CountriesType>;
