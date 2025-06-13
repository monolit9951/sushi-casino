import Roulette from "../../components/roulette/roulette";
import Item from "../../components/item/item";
import './casinoPage.scss'
// import Header from "components/header/header";
import Footer from "components/footer/footer";
import { useQuery } from '@tanstack/react-query'
import { getItemsSet, ItemsInterface } from "api/rouletteApi";


function Casino() {
  return (
    <>
    <Header />
      <main className="casino_main">

        <div className="main_container">
          <div className="main_description">
            <div className="main_description_first">Zakręć kołem i wygraj sushi!</div>
            <div className="main_description_second">Wpisz swój kod promocyjny, zakręć ruletką i zgarnij smakowite nagrody od naszej restauracji!</div>
          </div>

          <Roulette />

          <div className="itemsList">
            <div className="itemsList_heading">Co możesz zgarnąć na kole fortuny?</div>
            <div className="itemsList_list">
              {mockItems.map((_, index: number)=> (
                <Item key={index}/>
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
