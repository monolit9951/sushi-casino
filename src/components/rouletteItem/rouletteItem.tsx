import { FC } from "react";
import sampleItem from '../../assets/img/sushiSample.png'
import './rouletteItem.scss'
import { ItemsInterface } from "api/rouletteApi";

interface RouletteItemInterface {
    item: ItemsInterface
}

const RouletteItem: FC <RouletteItemInterface>= ({item}) => {
    return(
        <div className="rouletteItem">
            <img src={item.imageUrl} alt={item.name} />
        </div>
    )
}

export default RouletteItem