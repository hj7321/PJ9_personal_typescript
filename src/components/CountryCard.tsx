import { StCap, StCon, StImg, StLi, StUl } from "../style/CountryCardStyle";
import { CountryWithFavorite } from "../types/country.type";

interface CountryCardProps {
  countries: CountryWithFavorite[];
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
      {countries.map((country: CountryWithFavorite) => (
        <StLi
          key={country.name.common}
          onClick={() => onHandleToggle(country.name.common)}
        >
          <StImg src={country.flags.png} height="100px" />
          <StCon>{country.name.common}</StCon>
          <StCap>수도: {country.capital ?? "❌"}</StCap>
        </StLi>
      ))}
    </StUl>
  );
};

export default CountryCard;
