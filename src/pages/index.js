import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../routes";
import { Container, CountryList, Header, CountryFilters } from "../components";
import { MainStyles } from "../components/styles/Container.styled";
import CountriesContext from "../context/CountriesContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);

  const getCountries = async () => {
    await fetch(`${ALL_COUNTRIES}?fields=cca2,name,flags,population,region,capital`)
      .then(responce => responce.json())
      .then(countries => {
        setCountries(countries)
        setInitialCountries(countries);
        setIsLoading(false)
      })
  }

  useEffect(() => {
    countries.length < 1 && getCountries();
  }, [])
  return (
    isLoading ?
      <div>Loading...</div> :
      <CountriesContext.Provider value={{ setCountries, initialCountries }}>
        <Header />
        <MainStyles>
          <Container>
            <CountryFilters />
            <CountryList countries={countries} />
          </Container>
        </MainStyles>
      </CountriesContext.Provider>
  );
}

export default Index;
