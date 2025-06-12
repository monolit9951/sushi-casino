import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import './roulette.scss';
import indicatorTop from '../../assets/img/rouleteIndicatorTop.svg';
import indicatorBottom from '../../assets/img/rouleteIndicatorBottom.svg';
import RouletteItem from "../rouletteItem/rouletteItem";
import ModalSlider from "../modalSlider/modalSlider";
import {  ItemsInterface } from "api/rouletteApi";

interface RouletteInterface {
  isLoading: boolean;
  data: ItemsInterface[];
  isError: boolean;
}

// тестовый интерфейс
interface Item {
  name: string;
  img: string;
}


// Количество айтемов в рулетке
const cells = 60

// Ширина одного элемента в пикселях (с учётом марджина)
const itemWidth = 216

// Все возможные варианты призов (элементов)
const allItems: Item[] = [
  { name: 'iPhone', img: '/IMG/case/iPhone.png' },
  { name: 'Keyboard', img: '/IMG/case/keyboard.png' },
  { name: 'Headphones', img: '/IMG/case/headphones.png' }
];

const Roulette: FC<RouletteInterface> = ({ isLoading, data, isError }) => {

  // промокод
  const [promoAccess, setPromoAccess] = useState<boolean>(true)
  const [promocode, setPromocode] = useState<string>('')
  const handlePromoInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPromocode(event.target.value)
  }

  // модалка приза
  const [modalPrizeShow, setModalPrizeShow] = useState<boolean>(false)
  
  const handleCloseModalCallback = () =>{
    setModalPrizeShow(false)
  }

  // функция случайного выбора приза из allItems
  const getItem = ():Item =>{
    const index = Math.floor(Math.random() * allItems.length)
    return allItems[index]
  }

  const [items, setItems] = useState<Item[]>([])                        //массив элементов для показа в рулетке
  const [isStarted, setIsStarted] = useState<boolean>(false)            //флаг крутится ли рулетка
  const [pendingSpin, setPendingSpin] = useState<boolean>(false)        //флаг для запуска анимации прокрутки 
  const listRef = useRef<HTMLUListElement>(null)                        //реф на юл для стилей и лисенеров

  const winnerIndex = Math.floor(cells / 2);                            //индекс победной ячейки, он всегда по центру

  // массив для рулетки, в середину засовываем выигрышный айтем
  const generateSpinItems = ():Item[] =>{
    const newItems: Item[] = Array.from({length: cells}, getItem)
    const targetItem = allItems.find(item => item.name === 'Keyboard')!
    newItems[winnerIndex] = targetItem
    return newItems
  }

  // при первом рендере создаём список айтемов
  useEffect(() => {
    setItems(generateSpinItems())
  }, [])

  // сброс позиции списка перед анимацией
  const resetPosition = () =>{
    if(!listRef.current) return;
    listRef.current.style.transition = 'none'
    listRef.current.style.left = '50%'
    listRef.current.style.transform = 'translate3d(0, 0, 0)'
    void listRef.current.offsetWidth
  }

  // запуск кручения рулетки
  const start = () =>{
    if (isStarted) return

    setIsStarted(true)
    resetPosition()

    const newItems = generateSpinItems()
    setItems(newItems)

    // ожидание обновления дом для сетАйтемс и запуск анимации
    setTimeout(() => {
      setPendingSpin(true)
    }, 0)
  }

  useEffect(() => {
    if(!pendingSpin || !listRef.current) return

    const stopPosition = -winnerIndex * itemWidth - itemWidth / 2 + 'px'

    listRef.current.querySelectorAll('.roulette_strip_item').forEach(el => {
      el.classList.remove('active')
    })

    // Анимации
    listRef.current.style.transition = '5s cubic-bezier(0.21, 0.53, 0.29, 0.99)';
    listRef.current.style.left = '50%';
    listRef.current.style.transform = `translate3d(${stopPosition}, 0, 0)`;

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName !== 'transform') return; 

      setIsStarted(false);
      setPendingSpin(false);

      // Добавляем класс active к выигрышному элементу (для подсветки ТЕСТ)
      const liElements = listRef.current?.querySelectorAll('li') || [];
      const winnerElement = liElements[winnerIndex];
      winnerElement?.classList.add('active');

      // Логируем выигрыш после подсветки (ТЕСТ)
      setTimeout(() => {
        const data = items[winnerIndex];
        console.log('Выигрыш:', data);
      }, 0);

      // Удаляем слушатель
      listRef.current?.removeEventListener('transitionend', onTransitionEnd);
    };

    // слушатель для окончания анимации
    listRef.current.addEventListener('transitionend', onTransitionEnd);

    // размонтировка и снятия слушателя
    return () => {
      listRef.current?.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [pendingSpin])
 
  return (
    <div className="roulette">
      <div className="roulette_inner">
        <div className="roulete_indicator">
          <img src={indicatorTop} alt="indicatorUp" />
          <img src={indicatorBottom} alt="indicatorDown" />
        </div>
        <div className="roulette_container">
          <ul className="roulette_strip" ref={listRef}>
            {items.map((item: Item, index: number) => (
                          <li className="roulette_strip_item">
              <RouletteItem key={index} item={item}/>
            </li>
            ))}
          </ul>
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
        <button className="button_global_presset" onClick={start}>
          Spin a Wheel
        </button>
      </div>

      {modalPrizeShow && <ModalSlider handleCloseModalCallback={handleCloseModalCallback} />}
    </div>
  );
};

export default Roulette;