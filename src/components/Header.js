import React, { useContext } from "react";
import { Container } from ".";
import GlobalContext from "../context/GlobalContext";
import { HeaderStyles, Navigarion, SiteName, Button } from "./styles/Header.styled";

const Header = () => {
    const { theme, setTheme } = useContext(GlobalContext);

    const changeTheme = () => {
        return theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme")
    }
    return (
        <HeaderStyles>
            <Container>
                <Navigarion>
                    <SiteName>Where in the world?</SiteName>
                    <Button onClick={changeTheme}><i className="fa fa-moon-o" aria-hidden="true"></i> Change Theme</Button>
                </Navigarion>
            </Container>
        </HeaderStyles>
    )
}

export default Header;