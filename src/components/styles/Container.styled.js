import styled from "styled-components";

export const ContainerStyles = styled.div`
    max-width: 1470px;
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (max-width: 768px) {
        max-width: 370px;
    }
`
export const MainStyles = styled.main`
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 30px 0;
`