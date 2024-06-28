// export interface Country {
//   flags: string;
//   name: string;
//   capital: string;
//   isFavorite: boolean;
// }

type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Translations = {
  [key: string]: {
    official: string;
    common: string;
  };
};

type Demonyms = {
  [key: string]: {
    f: string;
    m: string;
  };
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Car = {
  signs: string[];
  side: string;
};

type Flags = {
  png: string;
  svg: string;
};

type CapitalInfo = {
  latlng: number[];
};

type PostalCode = {
  format: string;
  regex: string;
};

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  allSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: object;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CountryWithFavorite extends Country {
  isFavorite: boolean;
}
