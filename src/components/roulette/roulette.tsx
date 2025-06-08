import { FC, useEffect, useRef, useState } from "react";
import './roulette.scss'
import indicatorTop from '../../assets/images/rouleteIndicatorTop.svg'
import indicatorBottom from '../../assets/images/rouleteIndicatorBottom.svg'
import RouletteItem from "../rouletteItem/rouletteItem";
// import ModalPrize from "../modalPrize/modalPrize";
import ModalSlider from "../modalSlider/modalSlider";

type Item = {
  id: number;
  image: string;
  name: string;
};

// ТЕСТОВЫЕ АЙТЕМЫ
const ORIGINAL_ITEMS: Item[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/100/100?random=${i}`,
  name: `Item ${i + 1}`,
}));

// фиксированное значение ширины айтема + его мерджины(х2)
const ITEM_WIDTH = 216

// функция перемешивает айтемы
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

const Roulette: FC = () =>{
    // ссылки на элементы рулетки
    const containerRef = useRef<HTMLDivElement>(null);
    const targetDistanceRef = useRef(0);
    const fixedContainerWidth = useRef(0);

    // список всех элементов рулетки, позиция остановки, статус вращения
    const [items, setItems] = useState<Item[]>(() => shuffle(ORIGINAL_ITEMS));
    const [position, setPosition] = useState(0);
    const [spinning, setSpinning] = useState(false);

    // для отображения модалки приза
    const [modalPrizeShow, setModalPrizeShow] = useState<boolean>(false)

    // для пропсов суши (тут просто имя для отображения)
    // const [sushiPropName, setSushiPropName] = useState<string>('')

    // ДЛЯ ОТЛАДКИ ПРОМОКОДА
    // ЕСЛИ ПРОМОКОД ЕСЛИ false, выдаст уведомление ЕСЛИ ЛЮБОЕ ДРУГОЕ (В ТОМ ЧИСЛЕ ПОУСТОЕ - БУДЕТ СПИН)
    const [promoAccess, setPromoAccess] = useState<boolean>(true)
    const [promoInput, setPromoInput] = useState<string>('')

    const handlePromoInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPromoInput(event.target.value)
        setPromoAccess(true)
    }

    // ФУНКЦИЯ ПРОКРУТКИ ДЕЙСТВУЕТ СЛЕДУЮЩИМ ОБРАЗОМ. У НАС ЕСТЬ КОЛИЧЕСТВО rounds, ТО ЕСТЬ ПОЛНЫХ ПРОКРУТОВ РУЛЕТКИ
    // НЕЗАВИСИМО ОТ ИХ КОЛИЧЕСТВА РУЛЕТКА БУДЕТ КРУТИТЬСЯ ОПРЕДЕЛЁННОЕ КОЛИЧЕСТВО ВРЕМЕНИ duration, ОТСЮДА НАХОДИМ
    // СКОРОСТЬ И ПЛАВНОСТЬ ПРОКРУТКИ. РУЛЕТКА ЗАМЕДЛЯЕТ ХОД К КОНЦУ. КАЖДЫЙ ПРОКРУТ ПРОИСХОДИТ С ПЕРЕМЕШИВАНИЕМ В
    // НАЧАЛЕ (function shuffle)



    // функция для прокрутки
    const startSpinning = () => {
        if (spinning) return;

        // ТОЛЬКО ДЛЯ ОТЛАДКИ ПРОМОКОДА
        if(promoInput !== 'wincode_1'){
            setPromoAccess(false)
            return
        }

        // ТУТ ПИСАТЬ КОД ДЛЯ ПРОМОКОДА

        const newItems = shuffle(ORIGINAL_ITEMS);
        setItems(newItems);
        setSpinning(true);

        // Зафиксировать текущую ширину
        fixedContainerWidth.current = containerRef.current?.offsetWidth ?? 0;

        // количество прокруток
        const rounds = 3 + Math.floor(Math.random() * 3);
        const itemOffset = Math.floor(Math.random() * newItems.length) * ITEM_WIDTH;
        const intraItemOffset = Math.random() * ITEM_WIDTH;

        targetDistanceRef.current =
            rounds * newItems.length * ITEM_WIDTH + itemOffset + intraItemOffset;
    };

    // обработка
    useEffect(() => {
        if (!spinning) return;

        const totalDistance = targetDistanceRef.current;
        const duration = 10000;
        const startTime = performance.now();

        const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 2);

        const animate = () => {
        const now = performance.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuint(progress);
        const currentDistance = totalDistance * easedProgress;

        setPosition(currentDistance);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            setSpinning(false);

            // используем зафиксированную ширину
            // const center = currentDistance + fixedContainerWidth.current / 2;
            // const index = Math.floor(center / ITEM_WIDTH) % items.length;

            // console.log("Выпало:", items[index]);
            // setSushiPropName(items[index].name)
            setModalPrizeShow(true)
        }
    };

        requestAnimationFrame(animate);
    }, [spinning, items]);


    // для размонтировки модального окна приза
    const handleCloseModalCallback = () =>{
        setModalPrizeShow(false)
    }

    return(
    <div className="roulette">
        <div className="roulette_inner">
            <div className="roulete_indicator">
                <img src={indicatorTop} alt="indicatorUp" />
                <img src={indicatorBottom} alt="indicatorDown" />
            </div>
                <div className="roulette_container" ref={containerRef}>
                    <div className="roulette_strip" style={{transform: `translateX(-${position % (items.length * ITEM_WIDTH)}px)`,}}>
                        {items.concat(items).map((_, index: number) => (
                        <div className="roulette_strip_item" key={index}>
                            <RouletteItem />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="roulete_control">
            <div className="roulete_control_promoContainer">
                <div className="roulete_control_noPromo">{promoAccess? '\u00A0' : 'Kod promocyjny nie znaleziony'}</div>
                <input type="text" className={promoAccess? "roulete_promocodeInput" : "roulete_promocodeInput noPromo"} placeholder="Enter a Promo Code" onChange={(event) => handlePromoInput(event)}/>
            </div>
            <button className="button_global_presset" onClick={startSpinning} disabled={spinning}>Spin a Wheel</button>
        </div>

        {modalPrizeShow && <ModalSlider handleCloseModalCallback = {handleCloseModalCallback}/>}
    </div>
    )
}

export default Roulette