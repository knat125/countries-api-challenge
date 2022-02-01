import React from "react";
import { CountryItem } from ".";
import { CountryListStyles } from "./styles/CountryList.styled";


const CountryList = (countries) => {
    return (
        <CountryListStyles>
            {
                countries.countries.map((item, key) =>
                    <CountryItem key={key} country={item} />)
            }
        </CountryListStyles>
    )
}

export default CountryList;