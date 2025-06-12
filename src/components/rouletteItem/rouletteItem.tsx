import { FC } from "react";
import sampleItem from '../../assets/img/sushiSample.png'
import './rouletteItem.scss'
import { ItemsInterface } from "api/rouletteApi";

interface Item {
  name: string;
  img: string;
}

interface RouletteItemInterface {
    item: Item
}

const RouletteItem: FC <RouletteItemInterface>= ({item}) => {
    return(
        <div className="rouletteItem">
            <img src={''} alt={item.name} />
        </div>
    )
}

export default RouletteItem