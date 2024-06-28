import axios from "axios";
import { Country } from "../types/country.type";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data;
  } catch (error) {
    console.error("에러: ", error);
    throw error;
  }
};
