import axios from 'axios'
import { IProduct } from './Product'

export const API = process.env.REACT_APP_API_URL

export const getProducts = async () => {
  return await axios.get<IProduct[]>(`${API}/products`)
}

export const getProduct = async (id: string) => {
  return await axios.get<IProduct>(`${API}/products/${id}`)
}

export const createProduct = async (product: IProduct) => {
  return await axios.post<IProduct>(`${API}/products`, product)
}

export const updateProduct = async (id: string, product: IProduct) => {
  return await axios.put<IProduct>(`${API}/products/${id}`, product)
}

export const deleteProduct = async (id: string) => {
  return await axios.delete<IProduct>(`${API}/products/${id}`)
}
