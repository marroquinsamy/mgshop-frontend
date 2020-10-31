import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IProduct } from './Product'
import './ProductsItem.css'
import { API } from './ProductService'

interface IProps {
  product: IProduct
  loadProducts: () => void
}

const ProductsItem = ({ product, loadProducts }: IProps) => {
  const history = useHistory()

  return (
    <div
      className="product-card"
      onClick={() => history.push(`/products/${product._id}`)}
    >
      <h4 className="product-title">{product.title}</h4>
      <p className="product-description">{product.description}</p>
      <img
        src={`${API}/${product.imagePath}`}
        className="product-picture"
        alt=""
      />
      <footer className="product-footer">
        <span className="price">Q{product.price}</span>
        <Link className="more-details" to={`/products/${product._id}`}>
          <i className="bx bx-right-arrow-alt"></i>
          Más detalles
        </Link>
      </footer>
    </div>
  )
}

export default ProductsItem
