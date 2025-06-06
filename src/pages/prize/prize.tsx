import "./prize.scss"
import sushiSample from '../../assets/images/sushiSample.png'
import { Link } from "react-router-dom"

function PrizePage(){
    return(
        <div className="prizePage">
            <div className="prizePage_container">
                <div className="prizePage_card">
                    <div className="prizePage_card_image">
                        <img src={sushiSample} alt="sushi" />
                    </div>
                    <div className="prizePage_card_description">
                        <div className="prizePage_card_heading">Sushi long name name name name name name name name</div>
                        <div className="prizePage_card_price"><span>Price:</span> 1000$</div>
                        <div className="prizePage_card_additional"><span>Your discount is </span>90%</div>
                        <div className="prizePage_card_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </div>
                        <Link to={'/product'} className="linkLikeSkeletonButton_global_presset">View sushi</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrizePage