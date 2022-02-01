import React, { useState, useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import { FiltersWrapper, InputWrapper, Input, SearchIcon, RegionsSelect } from "./styles/Filters.styled";

const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
];

const CountryFilters = () => {
    const { setCountries, initialCountries } = useContext(CountriesContext);
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");

    const filterByName = (e) => {
        setName(e.target.value);
        filterCountries(e.target.value, region);
    }

    const filterByRegion = (e) => {
        setRegion(e.value);
        filterCountries(name, e.value);
    }

    const filterCountries = (name, region) => {
        let countryKeys = Object.keys(initialCountries);
        let filtered = [];
        const filteredCountries = [];

        if (name) {
            filtered = filtered.length ? filtered.filter(item => initialCountries[item].name.common.toLowerCase().includes(name.toLowerCase())) : countryKeys.filter(item => initialCountries[item].name.common.toLowerCase().includes(name.toLowerCase()))
        }
        if (region) {
            filtered = filtered.length ? filtered.filter(item => initialCountries[item].region === region) : countryKeys.filter(item => initialCountries[item].region === region)
        }
        filtered.length && filtered.map((key) => filteredCountries.push(initialCountries[key]))

        return filteredCountries ? setCountries(filteredCountries) : setCountries(initialCountries)
    }

    return (
        <FiltersWrapper>
            <InputWrapper>
                <SearchIcon className="fa fa-search" aria-hidden="true"></SearchIcon>
                <Input placeholder="Search for a country..." type="text" value={name} onChange={filterByName} />
            </InputWrapper>
            <RegionsSelect onChange={filterByRegion} defaultValue={region} options={options} placeholder="Choose a region" classNamePrefix="filter-select" />
        </FiltersWrapper>
    )
}

export default CountryFilters;