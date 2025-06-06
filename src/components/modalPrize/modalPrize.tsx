import { FC, useEffect, useState } from "react";
import './modalPrize.scss'
import prizeSample from '../../assets/images/sushiSample.png'
import { Link } from "react-router-dom";

interface ModalPrizeInterface {
    handleCloseModalCallback: () => void
    // имя просто чтоб было чем заполнить данные
    name: string 
}

const ModalPrize: FC <ModalPrizeInterface> = ({handleCloseModalCallback, name}) =>{

    const [modalAnimation, setModalAnimation] = useState<boolean>(true)

    // для блокировки скролла при открытии модального окна
    useEffect(()=>{
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    // обработчик закрытия модального окна (нажатие на пустой экран)
    const handleCloseModal = () =>{
        setModalAnimation(false)
        document.body.style.overflow = 'auto'

        // пол секунды на анимацию
        setTimeout(() => {
            handleCloseModalCallback()
        }, 500);
    }

    return(
        <div className="modalPrize">
            <div className={modalAnimation? "ModalPrize_overlay" : "ModalPrize_overlay hide"}>
                <img src={prizeSample} alt="prizeImage" />
                <div className="ModalPrize_overlay_heading">YOU WON!!!</div>
                <div className="ModalPrize_overlay_description">90% discount on {name}</div>
                <Link to={'/prize'} className="linkLikeSkeletonButton_global_presset">Check prize</Link>
            </div>

            <div className={modalAnimation? "ModalPrize_background" : "ModalPrize_background hide"} onClick={handleCloseModal}/>
        </div>
    )
}

export default ModalPrize