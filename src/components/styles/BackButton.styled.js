import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 30px 0;
    a {
        padding: 12px 22px;
        background: ${({ theme }) => theme.header};
        color: ${({ theme }) => theme.text};
        border-radius: 5px;
        box-shadow: 0 0 2px ${({ theme }) => theme.shadow};
        &:hover {
            outline: none;
            box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
        }
    }
`
export const BackIcon = styled.i`
    color: ${({ theme }) => theme.text};
`