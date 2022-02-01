import ReactSelect from "react-select";
import styled from "styled-components";

export const FiltersWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`
export const InputWrapper = styled.div`
    position: relative;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
    }
`
export const SearchIcon = styled.i`
    position: absolute;
    left: 16px;
    top: 14px;
    color: ${({ theme }) => theme.input};
`
export const Input = styled.input`
    width: 100%;
    max-width: 360px;
    background-color: ${({ theme }) => theme.header};
    padding: 15px 12px 15px 44px;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 4px ${({ theme }) => theme.shadow};
    &:focus {
        outline: none;
        box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
    }
`

export const RegionsSelect = styled(ReactSelect)`
    .filter-select__control {
        background-color: ${({ theme }) => theme.header};
        padding: 5px 5px 5px 12px;
        border: none;
        font-size: 16px;
        color: ${({ theme }) => theme.text};
        box-shadow: 0 1px 4px ${({ theme }) => theme.shadow};
        &:focus {
            outline: none;
            box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
        }
    }
    .filter-select__single-value {
        color: ${({ theme }) => theme.text};
    }
    .filter-select__indicator-separator {
        display: none;
    }
    .filter-select__menu {
        background-color: ${({ theme }) => theme.header};
        color: ${({ theme }) => theme.text};
    }
`

export const SelectFocus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
    flex-wrap: wrap;
    gap: 30px 35px;
`