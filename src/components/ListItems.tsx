import styled from "styled-components";
import ItemCard from "./ItemCard.tsx";
import { ItemsInterface } from "../api";

interface Props {
  items: ItemsInterface[];
}

const ListItems = ({ items }: Props) => {
  return (
    <Content>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Content>
  );
};

const Content = styled.div`
<<<<<<< HEAD
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
=======
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    gap: 10px;
  }
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
`;
export default ListItems;
