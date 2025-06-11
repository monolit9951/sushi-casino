import { FC, useRef, useState } from "react";
import './roulette.scss';
import indicatorTop from '../../assets/img/rouleteIndicatorTop.svg';
import indicatorBottom from '../../assets/img/rouleteIndicatorBottom.svg';
import RouletteItem from "../rouletteItem/rouletteItem";
import ModalSlider from "../modalSlider/modalSlider";
import { ItemsInterface } from "api/rouletteApi";

const ITEM_WIDTH = 216;
const ROUNDS = 3; // количество полных кругов
const FILL_AFTER_WINNER = 10; // количество элементов после победителя

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

interface RouletteInterface {
  isLoading: boolean;
  data: ItemsInterface[];
  isError: boolean;
}

const Roulette: FC<RouletteInterface> = ({ isLoading, data, isError }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<ItemsInterface[]>([]);
  const [position, setPosition] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [modalPrizeShow, setModalPrizeShow] = useState(false);

  const [promoAccess, setPromoAccess] = useState(true);
  const [promoInput, setPromoInput] = useState('');

  const winnerItem = data[2]; // победитель — можно заменить динамически

  const handlePromoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoInput(event.target.value);
    setPromoAccess(true);
  };

  const startSpinning = () => {
    if (spinning) return;

    if (promoInput !== 'wincode_1') {
      setPromoAccess(false);
      return;
    }

    const shuffled = shuffle(data);
    const totalItems = ROUNDS * shuffled.length + 5;
    const extendedItems: ItemsInterface[] = [];

    // Основная часть
    for (let i = 0; i < totalItems; i++) {
      extendedItems.push(shuffled[i % shuffled.length]);
    }

    // Победитель
    extendedItems.push(winnerItem);

    // Добавить ещё 10 элементов после победителя
    for (let i = 0; i < FILL_AFTER_WINNER; i++) {
      extendedItems.push(shuffled[i % shuffled.length]);
    }

    setItems(extendedItems);
    setPosition(0);
    setSpinning(true);

    const finalIndex = extendedItems.length - FILL_AFTER_WINNER - 1;
    const distance = finalIndex * ITEM_WIDTH;
    const duration = 20000;

    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const newPosition = distance * eased;

      setPosition(newPosition);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        setModalPrizeShow(true);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleCloseModalCallback = () => {
    setModalPrizeShow(false);
  };

  const renderItems = items.length > 0 ? items : data;

  return (
    <div className="roulette">
      <div className="roulette_inner">
        <div className="roulete_indicator">
          <img src={indicatorTop} alt="indicatorUp" />
          <img src={indicatorBottom} alt="indicatorDown" />
        </div>
        <div className="roulette_container" ref={containerRef}>
          <div
            className="roulette_strip"
            style={{
              transform: `translateX(-${position}px)`,
              whiteSpace: 'nowrap',
              transition: spinning ? 'none' : 'transform 0.3s ease-out',
            }}
          >
            {renderItems.map((item, index) => (
              <div
                className="roulette_strip_item"
                key={`${item.id}-${index}`}
                style={{ display: 'inline-block', width: ITEM_WIDTH }}
              >
                <RouletteItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="roulete_control">
        <div className="roulete_control_promoContainer">
          <div className="roulete_control_noPromo">
            {promoAccess ? '\u00A0' : 'Kod promocyjny nie znaleziony'}
          </div>
          <input
            type="text"
            className={promoAccess ? 'roulete_promocodeInput' : 'roulete_promocodeInput noPromo'}
            placeholder="Enter a Promo Code"
            onChange={handlePromoInput}
          />
        </div>
        <button className="button_global_presset" onClick={startSpinning} disabled={spinning}>
          Spin a Wheel
        </button>
      </div>

      {modalPrizeShow && <ModalSlider handleCloseModalCallback={handleCloseModalCallback} />}
    </div>
  );
};

export default Roulette;
