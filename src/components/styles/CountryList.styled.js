import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryListStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;
    gap: 30px 35px;
`
export const CountryBlockStyles = styled(Link)`
    width: calc(25% - 30px);
    display: block;
    background-color: ${({ theme }) => theme.header};
    border-radius: 10px;
    box-shadow: 0 0 2px ${({ theme }) => theme.shadow};
    &:hover {
        outline: none;
        box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const CountryBlockInnerStyles = styled.div`
    width: 25%;
    display: block;
`
export const CountryDescriptionStyles = styled.div`
    padding: 20px;
`
export const CountryDescriptionImageWrapper = styled.div`
    height: 50%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const CountryDescriptionImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
export const CountryDescriptionTitleStyles = styled.p`
    margin-bottom: 10px;
    font-family: Nunito Sans, Helvetica, Arial, sans-serif;
    font-weight: 800;
    font-size: 24px;
`
export const CountryDescriptionParagraphStyles = styled.p`
    font-family: Nunito Sans, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 14px;
`