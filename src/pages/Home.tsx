export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";
import Header from "../components/header/header";
import './home.scss'
import Roulette from "../components/roulette/roulette";
import RouletteItem from "../components/rouletteItem/rouletteItem";
import Item from "../components/item/item";

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
          <Roulette />
          <RouletteItem />
          <Item />
        </div>
      </div>
    </main>
  );
}

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

export default Home;
