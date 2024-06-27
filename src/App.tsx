import CountryList from "./components/CountryList";
import { GlobalStyle } from "./style/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <CountryList />
    </>
  );
};

export default App;
