import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { COUNTRY_BY_CODE } from "../routes";
import { Header, Container, BackButton, CountryPage } from "../components";
import { MainStyles } from "../components/styles/Container.styled";

const Country = () => {

  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({});



  useEffect(() => {
    const getCountry = async () => {
      await fetch(`${COUNTRY_BY_CODE}/${params.countryId}`)
        .then(responce => responce.json())
        .then(country => {
          setCountry(country[0]);
          setIsLoading(false)
        })
        .catch(error => console.log(error))

    }
    getCountry();
  }, [params.countryId])

  return (
    isLoading ?
      <div>Loading...</div> :
      <>
        <Header />
        <MainStyles>
          <Container>
            <BackButton />
            <CountryPage country={country} />
          </Container>
        </MainStyles>
      </>
  );
}

export default Country;