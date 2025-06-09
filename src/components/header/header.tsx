import { FC } from "react";
import './header.scss'
import mainLogo from '../../assets/img/MainLogo.svg'
import { Link } from "react-router-dom";
const Header: FC = () => {
    return(
        <header>
            <div className="header_container">
                <Link className="header_logo_link" to={'/'}>
                    <img src={mainLogo} alt="Logo" />
                </Link>

                <a className="header_link" href="https://neptunessushi.com/">
                    <span className="header_link_text">Our website</span>
                </a>
            </div>
        </header>
    )
}

export default Header