import axios from 'axios'
import {
  Category, FetchedWorkingHours,
  ItemsInterface,
  OrderToPost,
  Product,
  promocodesInterfase,
  ReturnedOrder,
  ValidatedVoucher,
} from '../types'

const BASE_URL = '/api'

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
})

const postOrder = async (orderObj: OrderToPost): Promise<ReturnedOrder> => {
  return new Promise((resolve, reject) => {
    apiClient
      .post('/orders', orderObj)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const postVoucher = async (voucher: string): Promise<ValidatedVoucher> => {
  return new Promise((resolve, reject) => {
    apiClient
      .post('/vouchers/validate', { voucherKey: voucher })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/products')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getProduct = async (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/products/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/category')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getWorkingHours = async (): Promise<FetchedWorkingHours> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/working-hours')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getDeliveryCost = async (): Promise<{deliveryPrice: number}> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/orders/delivery')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


const getItemsSet = async (): Promise<ItemsInterface[]> => {
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

const getWinner = async (code: string): Promise<ItemsInterface> => {
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



const getPromocodes = async (): Promise<promocodesInterfase[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/wincode`, {
        headers: {
          'X-Secret': 'test-secret-key'
        }
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


export { getProducts, getCategories, getProduct, postOrder, postVoucher, getWorkingHours, getDeliveryCost, getItemsSet, getWinner, getPromocodes}
