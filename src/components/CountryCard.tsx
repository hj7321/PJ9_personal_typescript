import { StCap, StCon, StImg, StLi, StUl } from "../style/CountryCardStyle";
import { Country } from "../types/country.type";

interface CountryCardProps {
  countries: Country[];
  onToggleFavorite: (countryName: string) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  countries,
  onToggleFavorite,
}) => {
  const onHandleToggle = (countryName: string) => {
    onToggleFavorite(countryName);
  };

  return (
    <StUl>
      {countries.map((country) => (
        <StLi key={country.name} onClick={() => onHandleToggle(country.name)}>
          <StImg src={country.flags} height="100px" />
          <StCon>{country.name}</StCon>
          <StCap>수도: {country.capital}</StCap>
        </StLi>
      ))}
    </StUl>
  );
};

export default CountryCard;
