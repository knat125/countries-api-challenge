import React from "react";
import {
    CountryBlockStyles,
    CountryDescriptionImageWrapper,
    CountryDescriptionImage,
    CountryDescriptionStyles,
    CountryDescriptionTitleStyles,
    CountryDescriptionParagraphStyles
} from "./styles/CountryList.styled";
import { populationFormatting } from "../service/formatting";

const CountryItem = (country) => {
    return (
        <CountryBlockStyles to={`/${country.country.cca2.toLowerCase()}`}>
            <CountryDescriptionImageWrapper>
                <CountryDescriptionImage src={country.country.flags.svg} alt={country.country.name.common} />
            </CountryDescriptionImageWrapper>
            <CountryDescriptionStyles>
                <CountryDescriptionTitleStyles>{country.country.name.common}</CountryDescriptionTitleStyles>
                <CountryDescriptionParagraphStyles><b>Population:</b> {populationFormatting(country.country.population)}</CountryDescriptionParagraphStyles>
                <CountryDescriptionParagraphStyles><b>Region:</b> {country.country.region}</CountryDescriptionParagraphStyles>
                <CountryDescriptionParagraphStyles><b>Capital:</b> {country.country.capital}</CountryDescriptionParagraphStyles>
            </CountryDescriptionStyles>
        </CountryBlockStyles>
    )
}

export default CountryItem;