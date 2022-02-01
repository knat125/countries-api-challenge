import React from "react";
import { ContainerStyles } from "./styles/Container.styled";

const Container = (props) => {
    return (
        <ContainerStyles className="container">
            {props.children}
        </ContainerStyles>
    )
}

export default Container;