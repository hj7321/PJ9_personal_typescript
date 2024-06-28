import axios from "axios";
import { Country } from "../types/country.type";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    const countriesData: Country[] = data.map((country: Country) => ({
      flags: country.flags.png,
      name: country.name.common,
      capital: Array.isArray(country.capital)
        ? country.capital[0]
        : country.capital,
      isFavorite: false,
    }));
    return countriesData;
  } catch (error) {
    console.error("에러: ", error);
    throw error;
  }
};
