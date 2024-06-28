import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import { Country, CountryWithFavorite } from "../types/country.type";
import CountryCard from "./CountryCard";
import { StDiv, StSection, StSelect } from "../style/CountryListStyle";
import Loading from "./Loading";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<CountryWithFavorite[] | null>(
    null
  );
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Country[] = await getCountries();
        const newData: CountryWithFavorite[] = data.map((e) => ({
          ...e,
          isFavorite: false,
        }));
        setCountries(newData);
      } catch (error) {
        console.error("에러: ", error);
      }
    };

    fetchData();
  }, []);

  const onToggleFavorite = (countryName: string): void => {
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

  if (!countries) return <Loading />;

  const sortCountryCard = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value;
    setSortOption(value);

    if (value === "country") {
      countries.sort((a, b) => {
        const result = a.name.common.localeCompare(b.name.common);
        return result;
      });
    } else if (value === "capital") {
      countries.sort((a, b) => {
        if (!a.capital || a.capital.length === 0) return 1;
        if (!b.capital || b.capital.length === 0) return -1;
        return a.capital[0].localeCompare(b.capital[0]);
      });
    }
    setCountries(countries);
  };

  const favoriteCountries = countries.filter((country) => country.isFavorite);
  const nonFavoriteCountries = countries.filter(
    (country) => !country.isFavorite
  );

  return (
    <>
      <StSection $top>
        <StSelect value={sortOption} onChange={sortCountryCard}>
          <option value="" disabled style={{ display: "none" }}>
            정렬 선택
          </option>
          <option value="country">나라 이름순</option>
          <option value="capital">수도 이름순</option>
        </StSelect>
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
