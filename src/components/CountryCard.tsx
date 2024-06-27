import { StCap, StCon, StImg, StLi, StUl } from "../style/CountryCardStyle";
import { Country } from "../types/country.type";

interface CountryCardProps {
  countries: Country[];
}

const CountryCard: React.FC<CountryCardProps> = ({ countries }) => {
  const onHandleToggle = () => {
    //
  };

  return (
    <StUl>
      {countries.map((country) => (
        <StLi key={country.name} onClick={onHandleToggle}>
          <StImg src={country.flags} height="100px" />
          <StCon>{country.name}</StCon>
          <StCap>수도: {country.capital}</StCap>
        </StLi>
      ))}
    </StUl>
  );
};

export default CountryCard;
