import axios from "axios";


const productsApi = axios.create({
  baseURL: 'http://localhost:3000/products'
})

export const getProducts = async () => {
  const res = await productsApi.get('/');
  return res.data;
}


export const createProduct = async (product) => await productsApi.post('/', product);

export const deleteProduct = async (id) => await productsApi.delete(`${id}`, )

export const updateProduct = async (product) => await productsApi.put(`${product.id}`, product)