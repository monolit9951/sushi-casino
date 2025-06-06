<<<<<<< HEAD
import CaseOpener from "../components/CaseOpener/CaseOpener.tsx";
import styled from "styled-components";
import ListItems from "./../components/ListItems.tsx";
import { useItemsSet } from "../api";
import LinkButton from "../components/BaseComponents/LinkButton.tsx";
import InfoModal from "../components/BaseComponents/InfoModal.tsx";
import { useMemo } from "react";

export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

function Home() {
  const { items /* isError, isLoading */ } = useItemsSet();
  const sortedItems = useMemo(
    () => items?.sort((a, b) => b.probability - a.probability),
    [items],
  );
  console.log(sortedItems);
  return (
    <Main>
      <Logo src="/LogoCasiBLACK.svg" alt="Lucky Sushi Logo" />
      <CaseOpener items={sortedItems || []} />
      <SushiLink href="https://neptunessushi.com/" target="_blank">
        Order more sushi
      </SushiLink>
      {sortedItems && <ListItems items={sortedItems} />}
      <InfoButton>
        <InfoModal />
      </InfoButton>
    </Main>
  );
}

const InfoButton = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const Logo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
`;

const SushiLink = styled(LinkButton)`
  display: flex;
  justify-content: center;
  width: 200px;
`;

const Main = styled.main`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
=======
// export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";
import Header from "../components/header/header";
import './home.scss'
import Roulette from "../components/roulette/roulette";
import Item from "../components/item/item";
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b

export const mockItems = [
  {
    id: 8,
    name: "Common",
    image: "/sushi8.jpeg",
    rarity: "common",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    name: "Common",
    image: "/sushi7.jpg",
    rarity: "common",
    description:
      "'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "Uncommon",
    image: "/sushi2.jpeg",
    rarity: "uncommon",
    description: "'Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    name: "Uncommon",
    image: "/sushi6.jpeg",
    rarity: "uncommon",
    description: "'Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    name: "Rare",
    image: "/sushi3.jpeg",
    rarity: "rare",
    description: "'Lorem ipsum dolor sit amet",
  },
  {
    id: 1,
    name: "Rere",
    image: "/sushi1.jpeg",
    rarity: "rare",
    description: "'Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    name: "Epic",
    image: "/sushi4.jpeg",
    rarity: "epic",
    description: "'Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    name: "Legendary",
    image: "/sushi5.jpeg",
    rarity: "legendary",
    description: "'Lorem ipsum dolor sit amet",
  },
  {
    id: 9,
    name: "Mythical",
    image: "/sushi9.png",
    rarity: "mythical",
    description: "'Lorem ipsum dolor sit amet",
  },
];

<<<<<<< HEAD
=======
function Home() {
  // const { items /* isError, isLoading */ } = useItemsSet();
  // const sortedItems = useMemo(
  //   () => items?.sort((a, b) => b.probability - a.probability),
  //   [items],
  // );
  // console.log(sortedItems);

  return (
    <main>
      {/* <Logo src="/LogoCasiBLACK.svg" alt="Lucky Sushi Logo" />
      <CaseOpener items={sortedItems || []} />
      <SushiLink href="https://neptunessushi.com/" target="_blank">
        Order more sushi
      </SushiLink>
      {sortedItems && <ListItems items={sortedItems} />}
      <InfoButton>
        <InfoModal />
      </InfoButton> */}
      <Header />

      <div className="main_container">
        <div className="main_description">
          <div className="main_description_first">Zakręć kołem i wygraj sushi!</div>
          <div className="main_description_second">Wpisz swój kod promocyjny, zakręć ruletką i zgarnij smakowite nagrody od naszej restauracji!</div>
        </div>

        <Roulette />

        <div className="itemsList">
          <div className="itemsList_heading">Co możesz zgarnąć na kole fortuny?</div>
          <div className="itemsList_list">
            {mockItems.map((item: any, index: number)=> (
              <Item key={index}/>
            ))}
          </div>

          <a className="linkLikeButton_global_presset" href="https://neptunessushi.com/">Zobacz więcej zestawów</a>
        </div>
      </div>
    </main>
  );
}

>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
export default Home;
