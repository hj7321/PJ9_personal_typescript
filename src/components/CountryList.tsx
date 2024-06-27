import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import { Country } from "../types/country.type";
import CountryCard from "./CountryCard";
import { StDiv } from "../style/CountryListStyle";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.error("에러: ", error);
      }
    };

    fetchData();
  }, []);

  if (!countries) return <div>Loading...</div>;

  return (
    <>
      <section>
        <h1>💖Favorite Countries💖</h1>
        <StDiv></StDiv>
      </section>
      <section>
        <h1>🌍Countries🌍</h1>
        <StDiv>{countries && <CountryCard countries={countries} />}</StDiv>
      </section>
    </>
  );
};

export default CountryList;
