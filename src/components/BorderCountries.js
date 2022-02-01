import React, { useEffect, useState } from "react";
import { COUNTRY_BY_CODE } from "../routes";
import { BorderCountry } from "./styles/BorderCountries.styled";

const BorderCountries = (borders) => {
    const [borderCountries, setBorderCountries] = useState([]);

    const getBorderCountries = async () => {
        await fetch(`${COUNTRY_BY_CODE}?codes=${borders.borders.join()}&fields=cca2,name`)
            .then(responce => responce.json())
            .then(borderCountries => {
                setBorderCountries(borderCountries)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getBorderCountries();
    }, [borders])

    return (
        <>
            {borderCountries.map((item) => {
                return (
                    <BorderCountry to={`/${item.cca2.toLowerCase()}`} key={item.cca2}>{item.name.common}</BorderCountry>
                )
            })}
        </>
    )
}

export default BorderCountries;