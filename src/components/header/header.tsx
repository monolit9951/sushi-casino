import { FC } from "react";
import './header.scss'
import mainLogo from '../../assets/images/MainLogo.svg'
const Header: FC = () => {
    return(
        <header>
            <div className="header_container">
                <img src={mainLogo} alt="Logo" />
                <a className="header_link" href="https://neptunessushi.com/">
                    <span className="header_link_text">Our website</span>
                </a>
            </div>
        </header>
    )
}

export default Header