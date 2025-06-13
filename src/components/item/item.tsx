import { FC } from "react";
import './item.scss'
import { ItemsInterface } from "api/rouletteApi";

interface ItemInterface {
    data: ItemsInterface
}

// вместо него можно переиспользовать rouleteItem, различия только в размерах (200/109)
const Item: FC = () => {
    return(
        <div className="item">
            <img src={sampleItem} alt="itemSample" />
        </div>
    )
}

export default Item