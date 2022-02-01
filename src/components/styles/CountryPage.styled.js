import styled from "styled-components";

export const CountryTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
`
export const CountryPageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`
export const CountryPageDetails = styled.div`
    width: 60%;
    padding-left: 10%;
    @media (max-width: 768px) {
        width: 100%;
        padding-left: 0%;
    }
`
export const CountryImageWrapper = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const CountryImage = styled.img`
    width: 100%;
    height: auto;
`
export const CountryDescription = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        display: block;
    }
`
export const CountryDescriptionParagraph = styled.p`
    margin-bottom: 15px;
    &:nth-child(2n+1) {
        padding-right: 10px;
        @media (max-width: 768px) {
            padding-right: 0;
        }
    }
    &:nth-child(2n) {
        padding-left: 10px;
        @media (max-width: 768px) {
            padding-left: 0;
        }
    }
`
export const CountryDescriptionBorders = styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;    
    margin-bottom: 15px;
    font-size: 16px;
`