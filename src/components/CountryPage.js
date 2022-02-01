import React from "react";
import { BorderCountries } from ".";
import {
    CountryTitle,
    CountryPageWrapper,
    CountryPageDetails,
    CountryImageWrapper,
    CountryImage,
    CountryDescription,
    CountryDescriptionParagraph,
    CountryDescriptionBorders
} from "./styles/CountryPage.styled";
import { populationFormatting } from "../service/formatting";


const CountryPage = (country) => {
    return (
        <>
            <CountryPageWrapper>
                <CountryImageWrapper>
                    <CountryImage src={country.country.flags.svg} alt={country.country.name.common} />
                </CountryImageWrapper>
                <CountryPageDetails>
                    <CountryTitle>{country.country.name.common}</CountryTitle>
                    <CountryDescription>
                        {country.country.name.official && <CountryDescriptionParagraph><b>Native Name:</b> {country.country.name.official}</CountryDescriptionParagraph>}
                        {country.country.population && <CountryDescriptionParagraph><b>Population:</b> {populationFormatting(country.country.population)}</CountryDescriptionParagraph>}
                        {country.country.region && <CountryDescriptionParagraph><b>Region:</b> {country.country.region}</CountryDescriptionParagraph>}
                        {country.country.subregion && <CountryDescriptionParagraph><b>Sub Region:</b> {country.country.subregion}</CountryDescriptionParagraph>}
                        {country.country.capital && <CountryDescriptionParagraph><b>Capital:</b> {country.country.capital}</CountryDescriptionParagraph>}
                        {country.country.tld && <CountryDescriptionParagraph><b>Top Level Domain:</b> {country.country.tld.map((item, key) => <span key={key}>{item}</span>)}</CountryDescriptionParagraph>}
                        {country.country.currencies && <CountryDescriptionParagraph><b>Currencies:</b> {Object.keys(country.country.currencies).map((val) => { return val }).join(", ")}</CountryDescriptionParagraph>}
                        {country.country.languages && <CountryDescriptionParagraph><b>Languages:</b> {Object.keys(country.country.languages).map((val) => { return country.country.languages[val] }).join(", ")}</CountryDescriptionParagraph>}
                    </CountryDescription>
                    {country.country.borders && <CountryDescriptionBorders><b>Border Countries:</b> <BorderCountries borders={country.country.borders} /></CountryDescriptionBorders>}
                </CountryPageDetails>
            </CountryPageWrapper>
        </>
    )
}

export default CountryPage;