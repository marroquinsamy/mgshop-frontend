import React from 'react'
import { IProduct } from './Product'
// import { useHistory } from 'react-router-dom'
// import * as productService from './ProductService'
import './ProductsItem.css'

interface IProps {
  product: IProduct
  loadProducts: () => void
}

const ProductsItem = ({ product, loadProducts }: IProps) => {
  /* const history = useHistory()

  const handleDelete = async (id: string) => {
    await productService.deleteProduct(id)
    loadProducts()
  } */

  return (
    <div className="product-card">
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p className="price">Q{product.price}</p>
    </div>
  )
}

export default ProductsItem
