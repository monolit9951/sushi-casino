import { FC } from "react";
import sampleItem from '../../assets/img/sushiSample.png'
import './rouletteItem.scss'

const RouletteItem: FC = () => {
    return(
        <div className="rouletteItem">
            <img src={sampleItem} alt="rouletteSample" />
        </div>
    )
}

export default RouletteItem