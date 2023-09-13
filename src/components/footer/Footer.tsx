import { StyledFooter } from "./footerStyled";
import gitHub_icon from "../img/gitHub_icon.png"

const Footer = () => {
    return (
        <StyledFooter>
            <p className="footer__copyright">&copy; Alix2019</p>
            <a href="https://github.com/alix1982" className="footer__link" target="blank">
                <img src={gitHub_icon} className="footer__img" alt="GitHub"/>
            </a>
        </StyledFooter>
    )
}

export default Footer