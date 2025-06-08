import { FC } from "react"
import './modalSlider.scss'

// сделать блокскролл
import grabler from '../../assets/images/Grabber.svg'
import copy from '../../assets/images/copy.svg'
import alert from '../../assets/images/alert.svg'
import Item from "../item/item"
const ModalSlider: FC = () =>{
    return(
        <div className="modalSlider">
            <div className="modalSlider_content">
                <img src={grabler} alt="grabler" className="modalSlider_grabler"/>

                <div className="modaSlider_content_container">
                    <div className="modalSlider_prizeImg">
                        <Item />
                    </div>

                    <div className="modalSlider_heading">You Won Visit to Neptunes Massage!</div>

                    <div className="modalSlider_details">
                        <div className="modalSlider_details_heading">Details</div>
                        <div className="modalSlider_details_info">Located at: Warsaw, Grochowska 207, 225. Website - google.com.</div>
                    </div>

                    <div className="modalSlider_details">
                        <div className="modalSlider_details_heading">Rules of Use</div>

                        <div className="modalSlider_details_info">
                            In order to use the massage, you need to 
                            say/indicate your winning promo code when 
                            making an appointment at the salon.
                        </div>

                        <button className="modalSlider_details_promocodeCopy">
                            <div className="modalSlider_details_promocodeCopy_promocode">FWOMR_42</div>
                            <img src={copy} alt="copy" />
                        </button>

                        <div className="modalSlider_details_promocodeExplain">
                            <img src={alert} alt="alert" />
                            <div className="modalSlider_details_promocodeExplain_text">
                                Save the promo code to claim your prize — without it, 
                                you won’t be able to receive it.
                            </div>
                        </div>
                    </div>
                    <div className="modalSlide_closeButton">
                        <button className="button_global_presset">Countinue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSlider