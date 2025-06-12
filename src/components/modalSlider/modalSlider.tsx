import { FC, useEffect, useState } from "react"
import './modalSlider.scss'

// сделать блокскролл
import grabler from '../../assets/img/Grabber.svg'
import copy from '../../assets/img/copy.svg'
import alert from '../../assets/img/alert.svg'
import Item from "../item/item"
import { ItemsInterface } from "api/rouletteApi"

interface ModalSlideInterface {
    handleCloseModalCallback: () => void
    data: ItemsInterface
}

const ModalSlider: FC <ModalSlideInterface>= ({handleCloseModalCallback, data}) =>{

    // для отслеживания позиции 
    const [touchStartY, setTouchStartY] = useState<number | null>(null)

    // ловим позицию нажатия
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {

        // проверяем что скролл в нулевой позиции
        const scrollTop = event.currentTarget.scrollTop
        if (scrollTop === 0) {
            setTouchStartY(event.touches[0].clientY)
        } else {
            setTouchStartY(null)
        }
    }

    // ловим движение пальца
    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartY === null) return

        const currentY = event.touches[0].clientY
        const diffY = currentY - touchStartY

        const scrollTop = event.currentTarget.scrollTop

        // если скролл будет в высшей точке (начальной), то позволяем свап, иначе ретурн
        if (scrollTop > 0) return

        // если длинна свайпа >= указанной пикселей
        if (diffY > 100) {
            handleUnmountModal()
            setTouchStartY(null)
        }
    }


    // блокировка скролла
    useEffect(()=>{
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])


    // инстакопирование кода по нажатию
    const handleCopyPromo = () => {
        navigator.clipboard.writeText("FWOMR_42")
    }


    // анимация сворачивания модалки
    const [hideAnimation, setHideAnimation] = useState<boolean>(true)

    // функция анимации (при размонтировке не стилизовать, потому ждём 300мс пока анимируется)
    const handleUnmountModal = () =>{
        setHideAnimation(false)

        setTimeout(() => {
            handleCloseModalCallback()
        }, 300);
    }

    return(
        <div className="modalSlider">
            <div className={hideAnimation? "modalSlider_content": "modalSlider_content hide"}>
                <img src={grabler} alt="grabler" className="modalSlider_grabler"/>

                <div className="modaSlider_content_container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className="modalSlider_prizeImg">
                        {/* <Item /> */}
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

                        <button className="modalSlider_details_promocodeCopy" onClick={handleCopyPromo}>
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
                        <button className="button_global_presset" onClick={handleUnmountModal}>Countinue</button>
                    </div>
                </div>
            </div>

            <div className={hideAnimation? "modalSlider_background" : "modalSlider_background hide"} onClick={handleUnmountModal}/>
        </div>
    )
}

export default ModalSlider