import { FC } from "react";
import './rouletteItem.scss'
import { ItemsInterface } from "api/rouletteApi";

interface RouletteItemInterface {
    item: ItemsInterface
}

const RouletteItem: FC = () => {
    return(
        <div className="rouletteItem">
            <img src={sampleItem} alt="rouletteSample" />
        </div>
    )
}

export default RouletteItem