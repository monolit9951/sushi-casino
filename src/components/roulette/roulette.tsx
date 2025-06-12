import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import './roulette.scss';
import indicatorTop from '../../assets/img/rouleteIndicatorTop.svg';
import indicatorBottom from '../../assets/img/rouleteIndicatorBottom.svg';
import RouletteItem from "../rouletteItem/rouletteItem";
import ModalSlider from "../modalSlider/modalSlider";
import {  getWinner, ItemsInterface } from "api/rouletteApi";
import { useQuery } from '@tanstack/react-query'

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

// Все возможные варианты элементов (TEST)
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

  // получение приза по промокоду
    const { data: winnerData, isLoading: winnerIsLoading, isError: winnerIsError, refetch: refetchWinner } = useQuery<ItemsInterface>({
      queryKey: ['get-winner'],
      queryFn: getWinner(promocode),
      staleTime: 1000 * 60 * 15,
      refetchOnWindowFocus: false,
      enabled: false
    });
  
  // модалка приза
  const [modalPrizeShow, setModalPrizeShow] = useState<boolean>(false)
  
  const handleCloseModalCallback = () =>{
    setModalPrizeShow(false)
  }

  // функция случайного выбора приза из allItems
  const getItem = ():ItemsInterface =>{

    if (!data || data.length === 0) return {description: '', id: 0, imageUrl: '', name: '', probability: 1, rarity: 'COMMON'}
    const index = Math.floor(Math.random() * data.length)
    return data[index]
  }

  const [items, setItems] = useState<ItemsInterface[]>([])              //массив элементов для показа в рулетке
  const [isStarted, setIsStarted] = useState<boolean>(false)            //флаг крутится ли рулетка
  const [pendingSpin, setPendingSpin] = useState<boolean>(false)        //флаг для запуска анимации прокрутки 
  const listRef = useRef<HTMLUListElement>(null)                        //реф на юл для стилей и лисенеров

  const winnerIndex = Math.floor(cells / 2);                            //индекс победной ячейки, он всегда по центру

  // массив для рулетки, в середину засовываем выигрышный айтем
  const generateSpinItems = (prizeName: string):ItemsInterface[] =>{
    if (!data || data.length === 0) return [];
    const newItems: ItemsInterface[] = Array.from({length: cells}, getItem)
    const targetItem = data.find(item => item.name === prizeName)!
    newItems[winnerIndex] = targetItem
    return newItems
  }

  // при первом рендере создаём список айтемов
  useEffect(() => {
    if(!isLoading && data.length > 0){
      setItems(generateSpinItems('Подарок 555'))
    }
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
  const start = async () =>{
    if (isStarted) return

    if(promocode === 'wincode_2'){
      setPromoAccess(true)
    } else{
      setPromoAccess(false)
      return
    }
    
    setIsStarted(true)
    resetPosition()

    const newItems = generateSpinItems('Подарок 2')
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
    listRef.current.style.transition = '10s cubic-bezier(0.21, 0.53, 0.29, 0.99)';
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
            {!isLoading && items.length > 0 && items.map((item, index) => (
              <li key={index} className="roulette_strip_item">
                <RouletteItem item={item} />
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