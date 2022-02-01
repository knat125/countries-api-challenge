import styled from "styled-components";
import { Link } from "react-router-dom";

export const BorderCountry = styled(Link)`
    margin: 7px 5px;
    padding: 5px 30px;
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    box-shadow: 0 0 2px ${({ theme }) => theme.shadow};
    &:hover {
        outline: none;
        box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
    }
`