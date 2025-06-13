import { FC } from "react";
import './item.scss'
import { ItemsInterface } from "types";
// import sushi from '../../assets/img/roulette/sushi.png'

interface ItemInterface {
    data: ItemsInterface
}

// вместо него можно переиспользовать rouleteItem, различия только в размерах (200/109)
const Item: FC <ItemInterface> = ({data}) => {
    return(
        <div className="item">
             <img 
                src={`/images/roulette/${data.imageUrl}`} 
                alt={data.name} 
            />
        </div>
    )
}

export default Item