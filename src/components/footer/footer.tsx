import { FC } from "react";
import './footer.scss'
import { Link } from "react-router-dom";

const Footer: FC = () => {
    return(
        <footer>
            <div className="footer_container">
                <Link to={'/security'}>Privacy Policy</Link>
                <span>•</span>
                <Link to={'/security'}>Terms and Conditions</Link>
            </div>
        </footer>
    )
}

export default Footer