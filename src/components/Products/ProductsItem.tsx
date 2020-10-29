import React from 'react'
import { IProduct } from './Product'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'boxicons'
// import * as productService from './ProductService'
import './ProductsItem.css'
import { API } from './ProductService'

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
      <img
        src={`${API}/${product.imagePath}`}
        className="product-picture"
        alt=""
      />
      <div className="price-container">
        <span className="price">Q{product.price}</span>
        <Link to="/product/" className="more-details">
          <i className="bx bx-right-arrow-alt"></i>
          Más detalles
        </Link>
      </div>
    </div>
  )
}

export default ProductsItem
