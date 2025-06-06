import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Rarity } from "../pages/Home.tsx";

const BASE_URL = import.meta.env.VITE_APP_MAIN_API;

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export interface ItemsInterface {
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  probability: number;
  rarity: Rarity;
}

export const getItemsSet = async (): Promise<ItemsInterface[]> => {
  return new Promise((resolve, reject) => {
    apiClient

      .get("api/casino")
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
<<<<<<< HEAD
      .get(`/api/casino/random?wincode=${code}`)
=======
      .get(`/casino/random?wincode=${code}`)
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
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
