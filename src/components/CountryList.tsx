import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import { CountryWithFavorite } from "../types/country.type";
import CountryCard from "./CountryCard";
import { StDiv, StSection } from "../style/CountryListStyle";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<CountryWithFavorite[] | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountries();
        console.log(data);
        const newData = data.map((e) => ({ ...e, isFavorite: false }));
        setCountries(newData);
      } catch (error) {
        console.error("에러: ", error);
      }
    };

    fetchData();
  }, []);

  const onToggleFavorite = (countryName: string) => {
    if (countries) {
      setCountries(
        countries.map((country) =>
          country.name.common === countryName
            ? { ...country, isFavorite: !country.isFavorite }
            : country
        )
      );
    }
  };

  if (!countries) return <div>Loading...</div>;

  const favoriteCountries = countries.filter((country) => country.isFavorite);
  const nonFavoriteCountries = countries.filter(
    (country) => !country.isFavorite
  );

  return (
    <>
      <StSection $top>
        <h1>💖Favorite Countries💖</h1>
        <StDiv>
          {favoriteCountries.length ? (
            <CountryCard
              countries={favoriteCountries}
              onToggleFavorite={onToggleFavorite}
            />
          ) : (
            ""
          )}
        </StDiv>
      </StSection>
      <StSection>
        <h1>🌍Countries🌍</h1>
        <StDiv>
          {
            <CountryCard
              countries={nonFavoriteCountries}
              onToggleFavorite={onToggleFavorite}
            />
          }
        </StDiv>
      </StSection>
    </>
  );
};

export default CountryList;
