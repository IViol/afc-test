export enum Region {
  'Europe' = 'Europe',
  'Asia' = 'Asia'
}

type CountryFlags = {
  svg: string,
  png: string,
}

export type Currency = {
  code: string,
  name: string,
  symbol: string,
}

type Language = {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string,
}

type RegionalBlock = {
  acronym: string,
  name: string,
  otherAcronyms?: string[],
}

type Translation = {[langCode: string]: string}

export type Country = {
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: string[],
  capital: string,
  altSpellings: string[],
  subregion: string,
  region: string,
  population: number,
  latlng: number[],
  demonym: string,
  area: number,
  gini?: number,
  timezones: string[],
  borders?: string[],
  nativeName: string,
  numericCode: string,
  flags: CountryFlags,
  currencies: Currency[],
  languages: Language[],
  translations: Translation,
  flag: string,
  regionalBlocs?: RegionalBlock[],
  cioc?: string,
  independent: boolean,
}

export type CountriesByRegion = {[region: string]: Country[]}
