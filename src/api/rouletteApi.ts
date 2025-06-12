import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ItemsInterface } from "types";
// import { Rarity } from "../pages/home/Home.tsx";

// const BASE_URL = import.meta.env.VITE_APP_MAIN_API;
const BASE_URL = "https://neptunessushi.com/api"

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});


export const getItemsSet = async (): Promise<ItemsInterface[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get("/casino")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getWinner = async (code: string): Promise<ItemsInterface> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/casino/random?wincode=${code}`)

      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const useItemsSet = () => {
  const {
    data: items,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItemsSet(),
  });

  return { items, isLoading, isError };
};