import styled from "styled-components";

export const HeaderStyles = styled.header`
    background-color: ${({ theme }) => theme.header};
    width: 100%;
    padding: 30px 0;
    box-shadow: 0 1px 4px ${({ theme }) => theme.shadow};
`
export const Navigarion = styled.header`
    display: flex;
    justify-content: space-between;
`
export const SiteName = styled.h1`
    font-size: 24px;
    font-weight: 800;
    margin-block-start: 0;
    margin-block-end: 0;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`
export const Button = styled.button`
    display: flex;
    border: none;
    background: transparent;
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    color: ${({ theme }) => theme.text};
    i {
        margin-right: 5px;
        color: ${({ theme }) => theme.text};
    }
`
