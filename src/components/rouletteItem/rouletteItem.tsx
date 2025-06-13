import { FC } from "react";
import './rouletteItem.scss'
import { ItemsInterface } from "types";


interface RouletteItemInterface {
    item: ItemsInterface
}

const RouletteItem: FC<RouletteItemInterface> = ({ item }) => {
  if (!item) return null;

  return (
    <div className="rouletteItem">
      <img src={''} alt={item.name || ''} />
    </div>
  );
};


export default RouletteItem