import Roulette from "../../components/roulette/roulette";
import Item from "../../components/item/item";
import './casinoPage.scss'
// import Header from "components/header/header";
import Footer from "components/footer/footer";
import { useQuery } from '@tanstack/react-query'
import { getItemsSet } from "api";
import { ItemsInterface } from "types";


function Casino() {

  const { data, isLoading, isError } = useQuery<ItemsInterface[]>({
    queryKey: ['items-set'],
    queryFn: getItemsSet,
    staleTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
  });

  return (
    <>
    {/* <Header /> */}
      <main className="casino_main">

        <div className="main_container">
          <div className="main_description">
            <div className="main_description_first">Zakręć kołem i wygraj sushi!</div>
            <div className="main_description_second">Wpisz swój kod promocyjny, zakręć ruletką i zgarnij smakowite nagrody od naszej restauracji!</div>
          </div>

          {!isLoading && <Roulette data={(data || [])} isLoading={isLoading} isError={isError} />}

          <div className="itemsList">
            <div className="itemsList_heading">Co możesz zgarnąć na kole fortuny?</div>
            <div className="itemsList_list">
              {!isLoading && data?.map((item: ItemsInterface, index: number) => (
                <Item key={index} data={item} />
              ))}
            </div>

            <a className="linkLikeButton_global_presset" href="https://neptunessushi.com/">Zobacz więcej zestawów</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Casino;
