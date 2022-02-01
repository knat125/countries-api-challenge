import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper, BackIcon } from "./styles/BackButton.styled"

const BackButton = () => {
    return (
        <ButtonWrapper>
            <Link to="/"><BackIcon className="fa fa-long-arrow-left" aria-hidden="true"></BackIcon> Back</Link>
        </ButtonWrapper>
    )
}

export default BackButton;