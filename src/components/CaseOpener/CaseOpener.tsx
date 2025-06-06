import { motion } from "framer-motion";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
=======
import { useEffect, useMemo, useRef, useState } from "react";
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
import styled from "styled-components";
import Button from "../BaseComponents/BaseButton.tsx";
import { getWinner, ItemsInterface } from "../../api";
import WinModal from "../WinModal.tsx";
import { mockItems } from "../../pages/Home.tsx";
import {
  repeatCount,
  SPIN_ITEM_WIDTH,
<<<<<<< HEAD
  spinDuration,
  VISIBLE_ITEMS_ON_SPINNER,
} from "./Constants.ts";
import { playSound } from "../../utils/utils.ts";
=======
  SPIN_ITEM_WIDTH_MOBILE,
  spinDuration,
  VISIBLE_ITEMS_MOBILE,
  VISIBLE_ITEMS_PC,
  VISIBLE_ITEMS_TABLET,
} from "./Constants.ts";
import { playSound } from "../../utils/utils.ts";
import { useMediaQuery } from "../../hooks/useMediaQuery.ts";
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

interface Props {
  items: ItemsInterface[];
}

const CaseOpener = ({ items }: Props) => {
  const [showWinnerModal, setShowWinnerModal] = useState(false);
<<<<<<< HEAD
=======
  const [isLessThan540] = useMediaQuery("(max-width: 540px)");
  const [isLessThan820] = useMediaQuery("(max-width: 820px)");
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

  const handleResult = () => {
    setShowWinnerModal(true);
  };
  const [winner, setWinner] = useState<ItemsInterface | undefined>();
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [extendedList, setExtendedList] = useState<ItemsInterface[]>([]);
  const [animateOffset, setAnimateOffset] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
=======
  const width = useMemo(
    () => (isLessThan540 ? SPIN_ITEM_WIDTH_MOBILE : SPIN_ITEM_WIDTH),
    [isLessThan540],
  );
  const visibleItems = useMemo(
    () =>
      isLessThan540
        ? VISIBLE_ITEMS_MOBILE
        : isLessThan820
          ? VISIBLE_ITEMS_TABLET
          : VISIBLE_ITEMS_PC,
    [isLessThan540, isLessThan820],
  );
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

  useEffect(() => {
    if (items.length > 0) {
      setExtendedList(items);
    }
  }, [items]);

<<<<<<< HEAD
  const CENTER_OFFSET =
    (SPIN_ITEM_WIDTH * VISIBLE_ITEMS_ON_SPINNER) / 2 - SPIN_ITEM_WIDTH / 2;
=======
  const CENTER_OFFSET = (width * visibleItems) / 2 - width / 2;
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

  const inputRef = useRef<HTMLInputElement>(null);

  const handleStart = async () => {
    if (isSpinning) return;
<<<<<<< HEAD
    playSound("/spin.mp3");
=======
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
    setAnimateOffset(true);

    const winner: ItemsInterface | null =
      inputRef.current && (await getWinner(inputRef.current?.value));
    if (!winner) return;
<<<<<<< HEAD
=======
    playSound("/spin.mp3");
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

    setWinner(winner);
    setIsSpinning(true);

    const baseList = Array.from({ length: repeatCount }, () => items).flat();

    const TARGET_INDEX = Math.floor(baseList.length / 2);
    const newList = [...baseList];
    newList[TARGET_INDEX] = winner;
    setExtendedList(newList);

    const distance =
<<<<<<< HEAD
      TARGET_INDEX * SPIN_ITEM_WIDTH -
      CENTER_OFFSET +
      (Math.random() * 50 - 25);
=======
      TARGET_INDEX * width - CENTER_OFFSET + (Math.random() * 50 - 25);
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

    setOffset(-distance);

    setTimeout(
      () => {
        handleResult();
        setIsSpinning(false);
        setAnimateOffset(false);
        setOffset(0);
      },
      spinDuration * 1000 + 200,
    );
  };

  return (
    <Content>
      <SlotsWrapper
<<<<<<< HEAD
        width={SPIN_ITEM_WIDTH * VISIBLE_ITEMS_ON_SPINNER}
        ref={containerRef}
      >
        {isSpinning && <ScreenOverlay />}
=======
        width={width * visibleItems}
        itemwidth={width}
        ref={containerRef}
      >
        {isSpinning && <ScreenOverlay width={width} />}
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
        <Slots
          animate={{ x: offset }}
          transition={{
            duration: animateOffset ? spinDuration : 0,
            ease: "easeOut",
          }}
        >
          {extendedList.map((item, i) => (
<<<<<<< HEAD
            <PrizeSlot key={i} itemwidth={SPIN_ITEM_WIDTH}>
              <Image
                src={
                  mockItems[Math.floor(Math.random() * 9)].image
                  // item.imageUrl
=======
            <PrizeSlot key={i} itemwidth={width}>
              <Image
                src={
                  mockItems[Math.floor(Math.random() * 9)].image
                  //item.imageUrl
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
                }
                alt={item.name}
              />
            </PrizeSlot>
          ))}
        </Slots>
        <Marker
<<<<<<< HEAD
          leftoffset={
            (SPIN_ITEM_WIDTH * VISIBLE_ITEMS_ON_SPINNER) / 2 -
            SPIN_ITEM_WIDTH / 2 -
            3
          }
          itemwidth={SPIN_ITEM_WIDTH}
=======
          leftoffset={(width * visibleItems) / 2 - width / 2 - 3}
          itemwidth={width}
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
        />
      </SlotsWrapper>
      <PromoCodeInput>
        <Input ref={inputRef} type="text" />
      </PromoCodeInput>
      {items && items.length > 0 && (
        <Button disabled={isSpinning} onClick={handleStart}>
          Spin
        </Button>
      )}
      {showWinnerModal && winner && (
        <WinModal item={winner} onClose={() => setShowWinnerModal(false)} />
      )}
    </Content>
  );
};

<<<<<<< HEAD
const ScreenOverlay = styled.div`
=======
const ScreenOverlay = styled.div<{ width: number }>`
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 105;

  mask-image: radial-gradient(
<<<<<<< HEAD
    circle 120px at 50% 80px,
    transparent 130px,
    black 130px
  );
  -webkit-mask-image: radial-gradient(
    circle 120px at 50% 80px,
    transparent 130px,
    black 130px
  );
=======
    circle ${({ width }) => `${width / 1.4}px at 50% ${width / 2.125}px`},
    transparent ${({ width }) => width / 1.3}px,
    black ${({ width }) => width / 1.3}px
  );

  // @media ${({ theme }) => theme.breakpoints.mobile} {
  //   mask-image: radial-gradient(
  //     circle 80px at 50% 60px,
  //     transparent 90px,
  //     black 90px
  //   );
  // }
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
`;

const Content = styled.div`
  padding: 20px;
<<<<<<< HEAD
=======
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0;
  }
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
`;

const Input = styled.input`
  margin-top: 15px;
  padding: 12px 20px;
  border: 2px solid #ffd700;
  border-radius: 6px;
  background: #1a1a1a;
  color: #ffd700;
  font-size: 16px;
  font-weight: bold;
  width: 260px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ff8c00;
  }
`;

const PromoCodeInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

<<<<<<< HEAD
const SlotsWrapper = styled.div<{ width: number }>`
=======
const SlotsWrapper = styled.div<{ width: number; itemwidth?: number }>`
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
  overflow: hidden;
  width: ${({ width }) => width}px;
  border: 2px solid #333;
  position: relative;
  margin-top: 10px;
<<<<<<< HEAD
=======
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: ${({ itemwidth }) => itemwidth}px;
  }
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
`;

const Slots = styled(motion.div)`
  display: flex;
  height: 160px;
`;

const PrizeSlot = styled.div<{ itemwidth: number }>`
  box-sizing: border-box;
  flex-shrink: 0;
  width: ${({ itemwidth }) => itemwidth}px;
  height: 160px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  padding: 3px;
<<<<<<< HEAD
=======

  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: ${({ itemwidth }) => itemwidth}px;
  }
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
`;

const Marker = styled.div<{ itemwidth: number; leftoffset: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ leftoffset }) => leftoffset}px;
  width: ${({ itemwidth }) => itemwidth}px;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
<<<<<<< HEAD
    left: 50%;
=======
    left: calc(50% + 2px);
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
    width: 2px;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
export default CaseOpener;
