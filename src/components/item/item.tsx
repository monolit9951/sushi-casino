import { FC } from "react";
import sampleItem from '../../assets/img/sushiSample.png'
import './item.scss'

// вместо него можно переиспользовать rouleteItem, различия только в размерах (200/109)
const Item: FC = () => {
    return(
        <div className="item">
            <img src={sampleItem} alt="itemSample" />
        </div>
    )
}

export default Item